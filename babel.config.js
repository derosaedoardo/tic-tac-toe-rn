module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./'],
        alias: {
          '@': './app',
          '@components': './app/components',
          '@screens': './app/screen',
          '@navigation': './app/navigation',
        },
      },
    ],
  ],
};
