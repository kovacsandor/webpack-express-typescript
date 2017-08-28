const path = require(`path`)
const webpackNodeExternals = require(`webpack-node-externals`)

module.exports = {
    entry: `./src/server/index.ts`,
    externals: [webpackNodeExternals()],
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: `ts-loader`,
                exclude: /node_modules/
            }
        ]
    },
    output: {
        filename: `index.js`,
        path: path.resolve(__dirname, `../dist`),
        publicPath: `/`
    },
    resolve: {
        extensions: [`.tsx`, `.ts`, `.js`]
    },
    target: `node`
}