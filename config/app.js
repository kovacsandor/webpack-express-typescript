const path = require(`path`)
const HtmlWebpackPlugin = require(`html-webpack-plugin`)

module.exports = {
	devtool: 'inline-source-map',
    entry: `./src/app/index.ts`,
    module: {
        rules: [
			{
				test: /\.html$/,
				loader: `html-loader`
			},
            {
				test: /\.tsx?$/,
				use: `ts-loader`,
				exclude: /node_modules/
			}
        ]
    },
    output: {
        filename: `app.js`,
		path: path.resolve(__dirname, `../dist/public`),
		publicPath: `/`
	},
	plugins: [
		new HtmlWebpackPlugin({
			filename: `index.html`,
			template: `src/app/html/index.html`
		})
	],
    resolve: {
        extensions: [`.tsx`, `.ts`, `.js`]
	}
}