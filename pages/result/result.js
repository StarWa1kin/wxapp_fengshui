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
  onShareAppMessage: function () {

  },
  again() {
    this.getResult()
  },
  shareFriends() {
    wx.updateShareMenu({
      withShareTicket: true,
      success() {
        debugger
      }
    })
  },
  getResult() {
    http({
      apiName:'/api/getinfo',
      method:'post',
      showToast:true,
    }).then(res=>{
      // debugger
      this.setData({
        result:res
      })

    })  
  }
})