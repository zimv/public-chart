module.exports = {
  lintOnSave: false,
  devServer: {
    port: 8886,
    // proxy: {
    //   "/console": {
    //     target: "http://oa.sso.developer.doctorwork.com/console/",
    //     secure: false,
    //     changeOrigin: true,
    //     pathRewrite: {
    //       "^/console": ""
    //     }
    //   }
    // }

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
