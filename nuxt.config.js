const FriendlyErrorsWebpackPlugin = require('@nuxtjs/friendly-errors-webpack-plugin');

module.exports = {
  build: {
    extend(config, { isDev }) {
      const tsLoader = {
        loader: 'ts-loader',
        options: { appendTsSuffixTo: [/\.vue$/], transpileOnly: true },
        exclude: [/vendor/, /\.nuxt/]
      };

      if (isDev) {
        // TSLint
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(tsx?|vue)$/,
          exclude: /(node_modules|\.nuxt)/,
          use: [
            {
              loader: 'vue-tslint-loader',
              options: {
                configFile: 'tslint.yml'
              }
            }
          ]
        });
      }

      config.module.rules.push({
        test: /\.postcss$/,
        use: [
          'vue-style-loader',
          'css-loader',
          {
            loader: 'postcss-loader'
          }
        ]
      });

      config.module.rules.push({ test: /((client|server)\.js)|(\.tsx?)$/, ...tsLoader });
      config.resolve.extensions.push('.ts');
      config.module.rules.map((rule) => {
        if (rule.loader === 'vue-loader') rule.options.loaders = { ts: tsLoader };
        return rule;
      });

      config.plugins.push(new FriendlyErrorsWebpackPlugin());
    }
  },
  css: [
    'reset.css',
    '@/assets/styles/main.css'
  ],
  extensions: ['js', 'ts'],
  mode: 'spa',
  modules: [
    // ['nuxt-sass-resources-loader', '@/assets/styles/resources.sss']
  ],
  srcDir: 'src/'
};
