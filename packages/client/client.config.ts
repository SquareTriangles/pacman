import path from 'path'
import { TsconfigPathsPlugin } from 'tsconfig-paths-webpack-plugin';
module.exports = {
  target: 'web',
  name: 'client',
  entry: './src/main.tsx',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'client.bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(jpe?g|gif|png|svg)$/i,
        use:
        {
          loader: 'file-loader',
          options: {
            name: './assets/images/[name].[ext]'
          }
        },
      },
      {
        test: /\.(eot|woff2?|ttf)$/i,
        type: '/assets/fonts/',
        dependency: { not: ['url'] }
        // use:
        // {
        //   // loader: 'file-loader',
        //   type: '/assets/fonts/',
        //   // dependency: { not: ['url'] },
        //   options: {
        //     name: '[name].[ext]',
        //     outputPath: '/assets/fonts/'
        //   }
        // },
      },    
      {
        test: /\.(mp3)$/i,
        use:
        {
          loader: 'file-loader',
          options: {
            name: './assets/audio/[name].[ext]'
          }
        },
      },         
      {
        test: /\.((c|sa|sc)ss)$/i,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              importLoaders: 1,
            },
          },
        ],
      },
      {
        test: /\.ts(x?)$/,
        exclude: /node_modules/,
        use: { loader: 'ts-loader' },
      }
    ]
  },
  resolve: {
    modules: ['src', 'node_modules'],
    extensions: ['.js', '.jsx', '.json', '.ts', '.tsx', 'css'],
    plugins: [new TsconfigPathsPlugin({ configFile: './tsconfig.json' })],
  },
  //    externals: [nodeExternals({ allowlist: [/\.(?!(?:tsx?|json)$).{1,5}$/i] })],
}
