module.exports = {
  css: [
    'reset.css',
    '@/assets/styles/main.sass'
  ],
  mode: 'spa',
  modules: [
    '~/modules/typescript.js',
    ['nuxt-sass-resources-loader', '@/assets/styles/resources.sass']
  ],
  srcDir: 'src/'
};
