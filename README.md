# React Native on macos

## Branches

`main`

It has the necessary configuration to run a macos app and navigation between screens

`jw-player`

It has the configuration and an example with JW Player Video this works only ios and android

## How to run

### macos

1. Install pods

```bash
cd macos && pod install
```

2. Start server `yarn start:macos`
3. Run emulator `yarn macos`

### ios

1. Install pods

```bash
cd ios && pod install
```

2. Start server `yarn start`
3. Run emulator `yarn ios`

### android

1. Start server `yarn start`
2. Run emulator `yarn android`

# Notes

- In macos the animations do not work, even when we use the React Native API `Animated`
- Macos supports react-navigation 5.x
- Macos needs a custom configuration in metro and has an error because it needs a patch
- Macos is not ready to use in applications with animations, videos or maps.
