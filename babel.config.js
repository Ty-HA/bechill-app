module.exports = {
  presets: [
    [
      'module:metro-react-native-babel-preset',
      {unstable_transformProfile: 'hermes-stable'}, // pour la compatibilité Hermes
    ],
  ],
  plugins: ['nativewind/babel'], // 👈 plugin nécessaire pour que NativeWind fonctionne
};
