module.exports = {
  dev: {
 domain: 'https://hzytest.haier.com' // 开发
  },
  test: {
    // domain: '/builtHouse/' ,// 测试服务域名
		// domain: 'http://10.190.47.91:9091/barter-manage/' //开发本地
		 // domain: 'https://hzytest.haier.com/barter-manage/' ,// 测试服务域名
		 domain: 'https://hzy.haier.com/barter-manage/' ,// 生产服务域名
  },
  prod: {
    domain: 'https://hzy.haier.com/barter-manage' // 生产服务域名
  }
};
