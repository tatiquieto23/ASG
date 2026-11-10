import { cp, mkdir, rm } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import path from "node:path";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const output = path.join(root, "www");

await rm(output, { recursive: true, force: true });
await mkdir(output, { recursive: true });

for (const file of ["index.html", "manifest.webmanifest", "service-worker.js"]) {
  await cp(path.join(root, file), path.join(output, file));
}

await mkdir(path.join(output, "icons"), { recursive: true });
await cp(path.join(root, "icons"), path.join(output, "icons"), { recursive: true });
console.log(`Web app prepared in ${output}`);
