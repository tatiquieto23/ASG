import { access } from "node:fs/promises";
import { spawn } from "node:child_process";
import { fileURLToPath } from "node:url";
import path from "node:path";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const android = path.join(root, "android");
const wrapper = process.platform === "win32" ? "gradlew.bat" : "./gradlew";
const wrapperPath = path.join(android, process.platform === "win32" ? wrapper : "gradlew");

try {
  await access(wrapperPath);
} catch (error) {
  if (error.code !== "ENOENT") throw error;
  console.error("Android platform files are missing. Run npx cap add android first.");
  process.exitCode = 1;
}

if (process.exitCode !== 1) {
  const command = process.platform === "win32" ? process.env.ComSpec || "cmd.exe" : wrapper;
  const args = process.platform === "win32"
    ? ["/d", "/s", "/c", `""${wrapperPath}" assembleDebug"`]
    : ["assembleDebug"];
  const result = spawn(command, args, {
    cwd: android,
    stdio: "inherit",
    windowsVerbatimArguments: process.platform === "win32"
  });

  result.on("error", error => {
    console.error("Android build could not start:", error.message);
    process.exitCode = 1;
  });

  result.on("exit", code => {
    if (code !== 0) {
      console.error("Android build failed. Check that Android Studio, its SDK, and a compatible JDK are installed.");
      process.exitCode = code || 1;
      return;
    }
    console.log("APK created at android/app/build/outputs/apk/debug/app-debug.apk");
  });
}
