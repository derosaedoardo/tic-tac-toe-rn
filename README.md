# Tic Tac Toe (React Native)

A simple Tic Tac Toe app built with React Native. It includes player selection, a scoreboard saved to AsyncStorage, and a clean UI with custom components.

## Features

- Play Tic Tac Toe with two players.
- Player list with top scores (saved locally).
- English-only i18n via `react-i18next`.
- Custom UI components and shared layout container.

## Tech Stack

- React Native
- React Navigation (native stack)
- i18next + react-i18next
- AsyncStorage

## Getting Started

Install dependencies:

```bash
npm install
```

Run the app:

```bash
npm run start
npm run android
```

For iOS:

```bash
npm run ios
```

## Project Structure

```
app/
  components/     # UI atoms, molecules, organisms
  i18n/           # i18n setup and English translations
  navigation/     # navigation config and typed helpers
  screen/         # screens (Home, SelectPlayer, Game)
  store/          # AsyncStorage wrapper
android/          # Android native project
ios/              # iOS native project
```

## Notes

- Player scores are stored under the `players` key in AsyncStorage.
- The app name is set to "Tic Tac Toe" for both Android and iOS.

## Scripts

- `npm run start` - Start Metro bundler
- `npm run android` - Run on Android
- `npm run ios` - Run on iOS
- `npm run lint` - Run ESLint
