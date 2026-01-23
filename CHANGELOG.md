# Changelog

All notable changes to this project will be documented in this file.

The format is based on Keep a Changelog, and this project follows Semantic Versioning.

## [Unreleased]

## [1.0.0] - 2025-02-14

### Added
- App navigation container split into `AppNavigator`.
- Typed `useAppNavigation` helper with `goTo`/`goBack`.
- Player list component with top scores display.
- Winner persistence and score tracking in AsyncStorage.
- English-only i18n setup with new translation keys.
- New README with project-specific instructions.

### Changed
- Updated app name to "Tic Tac Toe" (Android/iOS/app.json).
- Refined UI styles for Home, SelectPlayer, and Game screens.
- Standardized imports using path aliases.
- Android/iOS app icons updated from assets.

### Fixed
- AsyncStorage JSON parse safety.
- i18n boot sequence resilience.
- Android resource setup (strings/styles/icons).
- Lint warnings in game winner logic.
