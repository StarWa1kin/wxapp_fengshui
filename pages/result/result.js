// pages/result/result.js
import { http, baseUrl } from '../../utils/http.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    result:{},//签文结果
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getResult();
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function (res) {
    debugger
    if (res.from === 'button') {
      // 来自页面内转发按钮
      console.log(res.target)
    }
  },
  again() {
    this.getResult()
  },
  shareFriends() {
    // wx.updateShareMenu({
    //   withShareTicket: true,
    //   success() {
    //     debugger
    //   }
    // })
    wx.showShareMenu({
      withShareTicket: false
    })
  },
  getResult() {
    http({
      apiName:'/api/getinfo',
      method:'post',
      showToast:true,
    }).then(res=>{
      this.setData({
        result:res
      })

    })  
  },
  fd(){
    wx.previewImage({
      current: 'https://www.xxhui5.com:8443/attachment/QRcode',
      urls: ["https://www.xxhui5.com:8443/attachment/QRcode"]
    })
  },

  // onShareAppMessage: function (ops) {
  //   debugger
  //   if (ops.from === 'button') {
  //     // 来自页面内转发按钮
  //     console.log(ops.target)
  //     console.log(this.data.id) //
  //          //this.data.id 可以在Page({})里data中设定id

  //   }
  //   return {
  //     title: '标签',
  //     path: '/pages/detail/detail?id=' + this.data.id, //这里设定都是以"/page"开头,并拼接好传递的参数
  //     success: function (res) {
  //       // 转发成功
  //       console.log(res);
  //       console.log("转发成功:" + JSON.stringify(res));
  //     },
  //     fail: function (res) {
  //       // 转发失败
  //       console.log("转发失败:" + JSON.stringify(res));
  //     }
  //   }
  // }
})