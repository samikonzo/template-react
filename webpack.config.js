const webpack = require('webpack')
const path = require('path')

let rules = {
	jsx : {
		test : /\.jsx$/,
		use : ['react-hot-loader/webpack', {
			loader: 'babel-loader',
			options: { presets : ['env', 'react']}
		}],
		exclude : ['/node_modules/', 'public']
	},

	less : {
		test 	: /\.less$/,
		use 	: [
			'style-loader',
			'css-loader',
			'less-loader'
		],
		exclude : ['/node_modules/', 'public']
	}, 
}


module.exports = {
	entry: './client/index.jsx',
	output: {
		path: path.join(__dirname, 'public'),
		publicPath: '/',
		filename: 'script.js'
	},
	module:{
		rules: [rules.jsx, rules.less]
	}, 
}