// const launchOptions = uni.getLaunchOptionsSync();
// const config = require('../../config/index.js')[launchOptions.query.env || 'dev'];
// const config = require('../../config/index.js')['dev'];
const config = require('../../config/index.js')['test'];

function hSend (option) {
  const portalCode = uni.getStorageSync('token');
  option.url && (option.url = config.domain + option.url);
  const cfg = option.cfg || {};
  return new Promise((resolve) => {
    uni.showLoading({
      mask: true
    });
    uni.request({
      ...option,
      header: {
        'content-type': option.contentType || 'application/json',
        portalCode
      },
      success ({ data }) {
        uni.hideLoading();
        // 当遇到不规范的接口，没有isSuccess
        if (cfg.irregular) {
          return resolve(data);
        }
        if (data.code=='1') {
          resolve(data.data || true);
        } else {
          resolve(false);
        }
      },
      fail () {
        uni.hideLoading();
        resolve(false);
      }
    });
  });
}

function hGet (...args) {
  return hSend({
    url: args[0],
    data: args[1],
    method: 'get',
    cfg: args[2]
  });
}

function hPostForm (...args) {
  return hSend({
    url: args[0],
    data: args[1],
    method: 'post',
    contentType: 'application/x-www-form-urlencoded',
    cfg: args[2]
  });
}

function hPost (...args) {
  return hSend({
    url: args[0],
    data: args[1],
    method: 'post',
    cfg: args[2]
  });
}

module.exports = {
  hSend,
  hGet,
  hPost,
  hPostForm
};
