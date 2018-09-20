module.exports = (context) => ({
  plugins: [
    require('stylelint')({
      configFile: '.stylelintrc.yml'
    }),
    require('postcss-reporter')({
      clearReportedMessages: true,
      throwError: false
    }),
    require('autoprefixer')({
      browsers: ['last 2 versions']
    })
  ]
});
