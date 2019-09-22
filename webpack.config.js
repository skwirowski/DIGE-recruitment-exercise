const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  }
};

// var webpack = require('webpack');

// module.exports = {
//   mode: 'production',
//   entry: {
//     entry: __dirname + '/entry.js'
//   },
//   output: {
//     filename: '[name].bundle.js'
//   },
//   module: {
//     loaders: [
//       {
//         test: /\.js$/,
//         loader: 'babel-loader',
//         exclude: /node_modules/,
//         query: {
//           presets: ['es2015']
//         }
//       }
//     ]
//   }
// };
