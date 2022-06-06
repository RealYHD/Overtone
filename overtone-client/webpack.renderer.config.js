const rules = require('./webpack.rules');
const plugins = require('./webpack.plugins');
const { VueLoaderPlugin } = require('vue-loader')

rules.push({
  test: /\.css$/,
  use: [{ loader: 'style-loader' }, { loader: 'css-loader' }],
});

rules.push({
  test: /\.vue$/,
  loader: 'vue-loader'
});

plugins.push(new VueLoaderPlugin());

module.exports = {
  module: {
    rules,
  },
  plugins: plugins,
  resolve: {
    extensions: ['.js', '.ts', '.jsx', '.tsx', '.css'],
  },
};
