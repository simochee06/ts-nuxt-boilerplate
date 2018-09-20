module.exports = (storybookBaseConfig, configType, config) => {
  config.resolve.extensions.push('.ts', '.vue', '.css');

  config.module.rules.push({
    test: /\.ts$/,
    use: [
      {
        loader: 'ts-loader',
        options: {
          appendTsSuffixTo: [/\.vue$/]
        }
      }
    ]
  });

  config.module.rules.push({
    test: /\.pug$/,
    loader: 'pug-plain-loader'
  });

  return config;
};
