const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path');

module.exports = env => {
  return ({
    mode: env.MODE,
    entry: './src/index.ts',
    devtool: env.MODE === 'development' ? 'inline-source-map' : 'none',
    devServer: {
      contentBase: './dist'
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: 'ts-loader',
          exclude: /node_modules/
        },
      ],
    },
    resolve: {
      extensions: [ '.tsx', '.ts', '.js' ]
    },
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'dist')
    },
    plugins: [
      new CleanWebpackPlugin(),
      new CopyPlugin([
        { from: 'node_modules/@webcomponents/webcomponentsjs', to: 'webcomponentsjs' },
      ]),
      new HtmlWebpackPlugin({
        template: 'public/index.html'
      })
    ]
  });
};
