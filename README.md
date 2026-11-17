# Word Whiz — Slice & Say

A word-learning game for kids. Swipe through a floating picture to slice it, hear its name, and see the word. Practice fruit, vegetables, household items, and animals, with two difficulty levels.

## Web and Windows

The site is a Progressive Web App (PWA). Serve the repository root over HTTPS (or localhost while developing) to enable installation and offline play. Visitors can install it from their browser; on Windows, use the browser's **Install this site as an app** option.

```sh
npm install
npm run build:web
```

The deployable site is copied to `www/`. Deploy the contents of that folder to a static HTTPS host. Opening `index.html` directly from disk still works, but installation and offline caching require HTTPS or localhost.

## Custom word recordings

Place one MP3 pronunciation per word in `assets/audio/`, using the lowercase word as its filename (for example, `assets/audio/apple.mp3`). The app's vocabulary entries in `index.html` point to the matching files under `audio/`. `npm run build:web` copies the recordings into `www/audio/`; Capacitor builds include them after syncing. If a clip has not been added yet, the app uses the device's speech synthesis instead. The full filename checklist is in [word-recordings.csv](./word-recordings.csv).

## Android

Install Android Studio, its Android SDK, and a compatible JDK, then run:

```sh
npm install
npm run android:apk
```

The debug APK is written to `android/app/build/outputs/apk/debug/app-debug.apk`. For local device/emulator work, `npm run android:open` opens the project in Android Studio. Publishing to Google Play requires a signed release build.

## iPhone and iPad

The Capacitor iOS project is included in `ios/`. Building and signing it requires macOS, Xcode, and an Apple developer signing setup. On a Mac:

```sh
npm install
npm run ios:open
```

Select a signing team and destination in Xcode to run it on a device or archive it for distribution.

## Game controls

- Swipe through a picture with a mouse or touchscreen.
- Each slice speaks the word and adds it to the learned-words list. Quick slices build a streak multiplier up to 5×.
- Golden words are rare, glow gold, and award 50 bonus points plus 3 seconds.
- Choose **Everything**, **Fruit**, **Veggies**, **At home**, or **Animals**.
- **Level 1** is the easy pace. **Level 2** starts objects 10% faster and spawns them about 5% more often. Both levels speed up as the round goes on.
- Each round starts with 60 seconds; golden words can extend it by up to 15 seconds. The sound toggle controls spoken words, background music, and slice effects.

Word pronunciation uses the custom recording when available and otherwise falls back to the browser or device's built-in speech synthesis. Music and effects are generated with the Web Audio API.

## Word categories

- **Fruit:** apple, banana, orange, strawberry, grapes, pear, watermelon, pineapple
- **Veggies:** carrot, broccoli, corn, tomato, potato, pepper, cucumber, onion
- **At home:** cup, spoon, fork, knife, plate, bowl, pan, pot, teapot, book, clock, lamp, chair, key, teddy, towel, toothbrush
- **Animals:** cat, dog, cow, pig, horse, sheep, chicken, duck, fish, rabbit, elephant, lion

## Project

The game itself remains a single HTML/CSS/JavaScript app. Capacitor wraps it for Android and iOS, while the PWA supports web and Windows installation. The app ID is `com.wordwhiz.game`; change it in `capacitor.config.ts` before publishing under a different identity.
