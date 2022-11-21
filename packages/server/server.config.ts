import path, { join, resolve } from 'path'
import webpack, { Configuration } from 'webpack'
import nodeExternals from 'webpack-node-externals'
import { TsconfigPathsPlugin } from 'tsconfig-paths-webpack-plugin';
const fileRegex = /^(?!.*\.inline).*\.(svg|jpe?g|png|gif|eot|woff2?|ttf|mp3)$/;

const config: Configuration = {
    target: 'node',
    name: 'server',
    entry: './server.ts',
    node: {__dirname: false},
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: './server.bundle.js',
        libraryTarget: 'commonjs2'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                loader: 'null-loader',                
            },        
            {
                test: fileRegex,
                loader: 'null-loader',
            },
            {
                test: /\.ts(x?)$/,
                exclude: /node_modules/,
                use: { loader: 'ts-loader' }, 
            }
        ]
    },
    resolve: {
        modules: ['node_modules'],
        extensions: ['.js', '.jsx', '.json', '.ts', '.tsx'],
        plugins: [new TsconfigPathsPlugin({ configFile: './tsconfig.json' })],
    },
    externals: [
        nodeExternals(), 'pg-hstore', 'pg-native'
    ],
    plugins: [
        new webpack.ProvidePlugin({
            window: resolve(join(__dirname, 'webpack/mock/window.mock')),
        //    self: resolve(join(__dirname, 'webpack/mock/self.mock')),
        })
    ]
}


export default config
