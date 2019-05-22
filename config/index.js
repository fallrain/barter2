module.exports = {
  dev: {
    domain: 'http://10.190.47.5:9090/' ,// 本地测试服务域名
    // domain: 'https://hzytest.haier.com' // 测试服务域名
  },
  test: {
    domain: 'http://hzytest.haier.com/builtHouse/' // 测试服务域名
  },
  prod: {
    domain: 'http://10.190.47.5:9090/' // 生产服务域名
  }
};
