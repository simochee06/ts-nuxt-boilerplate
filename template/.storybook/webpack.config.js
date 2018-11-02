const merge = require('webpack-merge');
const path = require('path');

module.exports = (storybookBaseConfig, configType, config) => {
  return merge(config, {
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          loader: 'ts-loader',
          options: {
            appendTsSuffixTo: [/\.vue$/],
            transpileOnly: true
          }
        },
        {
          test: /\.sass$/,
          use: [
            'vue-style-loader',
            'css-loader',
            // 'postcss-loader',
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
                  path.resolve(__dirname, '../src/assets/styles/variables/**/*.sass'),
                  path.resolve(__dirname, '../src/assets/styles/utilities/**/*.sass'),
                  path.resolve(__dirname, '../src/assets/styles/components/**/*.sass')
                ]
              }
            }
          ]
        },
        {
          test: /\.pug$/,
          loader: 'pug-plain-loader'
        },
        {
          resourceQuery: /blockType=docs/,
          use: [
            'storybook-readme/env/vue/docs-loader',
            'html-loader',
            'markdown-loader'
          ]
        }
      ]
    },

    resolve: {
      alias: {
        '@': path.resolve(__dirname, '../src')
      },
      extensions: ['.ts']
    }
  });
};
