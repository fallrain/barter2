module.exports = {
  dev: {
 domain: 'https://hzytest.haier.com' // 测试服务域名
  },
  test: {
    // domain: '/builtHouse/' ,// 测试服务域名
		domain: 'http://10.190.47.5:9090/barter-manage/' //开发本地
		 // domain: 'https://hzytest.haier.com/builtHouse/' ,// 测试服务域名
		 // domain: 'https://hzytest.haier.com/barter-manage/' // 测试服务域名
  },
  prod: {
    domain: 'http://10.190.47.5:9090/' // 生产服务域名
  }
};
