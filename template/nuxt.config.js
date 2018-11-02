module.exports = {
  build: {
    extend(config, { isDev, isClient }) {
      const ForkTsChecker = require('fork-ts-checker-webpack-plugin');
      const FriendlyErrorsWebpackPlugin = require('@nuxtjs/friendly-errors-webpack-plugin');
      const HardSourceWebpackPlugin = require('hard-source-webpack-plugin');

      const tsLoader = {
        loader: 'ts-loader',
        options: { appendTsSuffixTo: [/\.vue$/], transpileOnly: true },
        exclude: [/vendor/, /\.nuxt/]
      };

      if (isDev && isClient) {
        config.devtool = 'eval-source-map';
      }

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

      config.module.rules.push({ test: /((client|server)\.js)|(\.tsx?)$/, ...tsLoader });
      config.resolve.extensions.push('.ts');
      config.module.rules.map((rule) => {
        if (rule.loader === 'vue-loader') rule.options.loaders = { ts: tsLoader };
        return rule;
      });

      config.plugins.push(new ForkTsChecker());
      config.plugins.push(new FriendlyErrorsWebpackPlugin());
      isDev && config.plugins.push(new HardSourceWebpackPlugin());
    },
    extractCSS: process.env.NODE_ENV !== 'development'
  },
  css: [
    'reset.css',
    '@/assets/styles/main.sass'
  ],
  extensions: ['js', 'ts'],
  head: {
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' }
    ],
    title: '{{title}}'
  },
  mode: 'spa',
  modules: [
    ['nuxt-sass-resources-loader', [
      // '@/assets/styles/variables/**/*.sass',
      // '@/assets/styles/utilities/**/*.sass',
      // '@/assets/styles/components/**/*.sass'
    ]]
  ],
  plugins: [],
  router: {
    base: process.env.BASE_URL || ''
  },
  srcDir: 'src/'
};
