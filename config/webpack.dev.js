const paths = require('./paths')
const Dotenv = require('dotenv-webpack')
const { merge } = require('webpack-merge')
const common = require('./webpack.common.js')
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')
const webpack = require('webpack')
const webpackDevClientEntry = require.resolve(
  "react-dev-utils/webpackHotDevClient"
);

const reactRefreshOverlayEntry = require.resolve(
  "react-dev-utils/refreshOverlayInterop"
);

module.exports = merge(common, {
  // Set the mode to development or production
  mode: 'development',

  // Control how source maps are generated
  devtool: 'eval-source-map',

  // Spin up a server for quick development
  devServer: {
    historyApiFallback: true,
    open: false,
    compress: true,
    hot: true,
    proxy: {
      '/api': 'http://localhost:8080'
    }
  },
  target: 'web',

  module: {
    rules: [
      // ... other rules
      {
        test: /\.js$|jsx/,
        exclude: /node_modules/,
        use: [
          // ... other loaders
          {
            loader: require.resolve('babel-loader'),
            options: {
              // ... other options
              plugins: [
                // ... other plugins
                require.resolve("react-refresh/babel"),
              ].filter(Boolean),
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new webpack.ProvidePlugin({
      process: 'process/browser',
    }),
    new webpack.HotModuleReplacementPlugin({
      'process.env.NODE_ENV': JSON.stringify('development')
    }),
    new ReactRefreshWebpackPlugin({
      overlay: {
        entry: webpackDevClientEntry,
        module: reactRefreshOverlayEntry
      }
    })
  ]
})
