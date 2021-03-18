const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: {
		app: './client'
	},
	output: {
		filename: 'javascript/[name]-[chunkhash].bundle.js',
		path: path.resolve(__dirname, 'build/client'),
		clean: true
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx|ts|tsx)$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader'
				}
			},
			{
				test: /\.(png|svg|jpg|jpeg|gif)$/,
				type: 'asset/resource',
				generator: {
					filename: 'images/[hash][ext][query]'
				}
			}
		]
	},
	plugins: [new HtmlWebpackPlugin({
		template: path.resolve(__dirname, 'client/index.html')
	})],
	resolve: {
		extensions: ['.js', '.jsx', '.ts', '.tsx', '.json']
	}
}
