import {
  baseUrl
} from './baseUrl.js';


const sendRequest = (config) => {
  let _config = {
    apiName: '',
    method: '',
    data: '',
    showToast: false,
    toastTxt: '加载中..'
  }
  Object.assign(_config, config);
  //是否配置加载框
  if (_config.showToast) {
    wx.showLoading({
      title: _config.toastTxt,
    })
  }

  return new Promise((resolve, reject) => {
    wx.request({
      url: baseUrl + _config.apiName,
      method: _config.method,
      data: _config.data,
      success(res) {
        // if(){}
        resolve(res.data)
      },
      fail(err) {
        errMsg(err);
        reject(err);
      },
      complete(result) {

      }
    })
  })

}


const errMsg = (msg) => {
  wx.showToast({
    title: msg,
    icon: 'none',
    duration: 2000
  })
}


export{
  sendRequest as http
}