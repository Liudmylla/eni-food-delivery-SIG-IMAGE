module.exports = function override (config, env) {
  config.output = {
    ...config.output,
    filename: 'static/js/[name].js',
    chunkFilename: 'static/js/[name].chunk.js'
  }

  config.optimization.splitChunks = {
    cacheGroups: {
      default: false
    }
  }
  config.optimization.minimize = false
  config.optimization.runtimeChunk = false

  console.log(JSON.stringify(config.plugins, null, 2))

  config.plugins[5].options.filename = 'static/css/[name].css'
  config.plugins[5].options.publicPath = ''

  return config
}
