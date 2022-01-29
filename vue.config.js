module.exports = {
  devServer: {
      host: '0.0.0.0',
      public: '192.168.1.101:8080',//該網路地址為你聯網的ip地址
      port: 8080,
      https: false,
      hotOnly: false,
      disableHostCheck: true,
  },
}