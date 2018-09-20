module.exports = (context) => ({
  plugins: [
    require('postcss-import')({
      plugins: [
        require('stylelint')({
          configFile: '.stylelintrc.yml'
        })
      ]
    }),
    require('stylelint')({
      configFile: '.stylelintrc.yml'
    }),
    require('postcss-nested'),
    require('postcss-reporter')({
      clearReportedMessages: true,
      throwError: false
    }),
    require('autoprefixer')({
      browsers: ['last 2 versions']
    })
  ]
});
