module.exports = () => ({
  plugins: [
    require('stylelint')({
      configFile: '.stylelintrc.yml'
    }),
    require('postcss-reporter')({
      clearReportedMessages: true
    }),
    require('autoprefixer')({
      browsers: ['last 2 versions']
    })
  ]
});
