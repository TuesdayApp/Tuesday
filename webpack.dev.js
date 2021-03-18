const { merge } = require('webpack-merge');

const common = require('./webpack.common');

module.exports = merge(common, {
	devServer: {
		host: '0.0.0.0',
		overlay: true,
		port: 3000
	},
	mode: 'development'
})
