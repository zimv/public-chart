module.exports = {
  lintOnSave: true,
  devServer: {
    port: 8886,
    proxy: {
      '/charts': {
        target: 'http://127.0.0.1:9092/', //charts devserver port 9092
        pathRewrite: {
          '^/charts': ''
        },
        changeOrigin: true
      }
    },
  }
};
