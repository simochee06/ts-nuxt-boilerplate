const merge = require('webpack-merge');
const path = require('path');

module.exports = (storybookBaseConfig, configType, config) => {
  return merge(config, {
    module: {
      rules: [
        {
          test: /\.ts$/,
          loader: 'ts-loader',
          options: {
            appendTsSuffixTo: [/\.vue$/]
          }
        },
        {
          test: /\.sass$/,
          use: [
            'vue-style-loader',
            'css-loader',
            'postcss-loader',
            {
              loader: 'sass-loader',
              options: {
                indentedSyntax: true
              }
            },
            {
              loader: 'sass-resources-loader',
              options: {
                resources: [
                  path.resolve(__dirname, '../src/assets/styles/resources.sass')
                ]
              }
            }
          ]
        },
        {
          test: /\.pug$/,
          loader: 'pug-plain-loader'
        }
      ]
    },

    resolve: {
      extensions: [ '.ts', '.vue', '.css' ]
    }
  });
};
