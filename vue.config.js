module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/ESD_UI/'  // Replace with your actual repository name
    : '/',
  lintOnSave: false,
  devServer: {
    historyApiFallback: true,
    client: {
      overlay: true
    }
  }
}