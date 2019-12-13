const merge = require('webpack-merge')
const baseConfig = require('./base')
const devConfig = require('./development')

module.exports = merge(baseConfig('development'), devConfig)
