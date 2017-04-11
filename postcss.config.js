module.exports = {
  plugins: [
    require('postcss-use')({
      modules: '*'
    }),
    require('postcss-autoreset')({
      reset: 'initial',
      rulesMatcher: 'bem'
    }),
    require('postcss-initial')({
      reset: 'inherited'
    }),
    require('autoprefixer')({
      browsers: ['ie > 6', 'last 2 versions']
    })
  ]
}
