// pages/fs-result/fs-result.js
import {
  http
} from '../../utils/http.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    param: {},
    fsRes: {},
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.setData({
      param: JSON.stringify(options)
    })
    this.getFS();

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },
  getFS() {
    console.log(this.data.param)
    http({
      apiName: '/api/getfangwei',
      method: 'post',
      data: this.data.param,
    }).then(res => {
      debugger
      this.setData({
        fsRes:res,
      })

    })
  },
  again(){
    wx.navigateBack({
      
    })
  }
})