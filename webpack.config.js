const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;
const path = require('path');

module.exports = {
  entry: './src/index',
  mode: 'development',
  devServer: {
    static: path.join(__dirname, 'dist'),
    port: 3002,
    historyApiFallback: true,
  },
  output: {
    publicPath: "auto",
  },
  resolve: {
    extensions: [".tsx", ".ts", ".jsx", ".js"],
  },  
  module: {
    rules: [
      {
        test: /\.(jsx?|tsx?)$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: ['@babel/preset-react'],
        },
      },
      {
        test: /\.css$/i,
        use: [
          'style-loader',
          'css-loader',
          'postcss-loader'
        ],
      },
    ],
  },
  plugins: [
    // To learn more about the usage of this plugin, please visit https://webpack.js.org/plugins/module-federation-plugin/
    new ModuleFederationPlugin({
      name: 'app2',
      filename: 'remoteEntry.js',
      exposes: {
        './App': './src/App',
        './FrictionData': './src/FrictionData',
        './store': './src/store',
      },
      shared: {'react': {singleton: true}, "react-dom": {singleton: true}, "react-router-dom": {singleton: true}},
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
};
