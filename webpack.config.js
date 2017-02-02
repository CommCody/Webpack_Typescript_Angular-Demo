'use strict';

var path = require('path');

module.exports = {
  entry: './app/index.ts',
  output: {
    filename: '/bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
      rules: [
          {
              test: /\.tsx?$/,
              exclude: /node_modules/,
              use: [
                  {
                    loader:'babel-loader',
                    options:{
                        presets:[ 'es2016', 'es2015' ]
                    }
                  },
                  'ts-loader'
              ],
          },
          {
              test: /\.js$/,
              exclude: /node_modules/,
              use: [
                  {
                    loader: 'babel-loader',
                    options: {
                        presets: [ 'es2016', 'es2015' ]
                    }
                  }
              ]
          },
          {
              test: /\.css$/,
              exclude: /node_modules/,
              use: [{
                  loader: 'style-loader'
                },
                {
                  loader: 'css-loader'
                }
              ]
          },
          {
              test: /\.scss$/,
              exclude: /node_modules/,
              use: [{
                  loader: 'style-loader'
                },
                {
                  loader: 'css-loader'
                },
                {
                    loader: 'sass-loader'
                }
              ]
          },
          {
              test: /\.less$/,
              exclude: /node_modules/,
              use: [{
                  loader: 'style-loader'
                },
                {
                  loader: 'css-loader'
                },
                {
                    loader: 'less-loader'
                }
              ]
          },
      ]
  },
  resolve: {
      extensions: ['.ts', '.tsx', '.js']
  }
};
