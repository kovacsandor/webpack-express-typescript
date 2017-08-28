import * as express from 'express'
import * as webpack from 'webpack'
import * as webpackDevMiddleware from 'webpack-dev-middleware'

import * as serverConfig from '../../config/server'
import * as webpackConfig from '../../webpack.config'

import { Configuration, Compiler } from 'webpack'

const server = express()

if (!!process.env.NODE_ENV && process.env.NODE_ENV.trim() == `development`) {
    server.use(webpackDevMiddleware(webpack(<Configuration[]>webpackConfig), {
        publicPath: serverConfig.output.publicPath
    }))
}

server.use(`/`, express.static(`dist/public`))

server.get(`/`, (req, res) => {
    res.sendFile(`index.html`)
})

const port = process.env.PORT || 3000
server.listen(port, () => { console.log(`Server is listening on port ${port}...`) })