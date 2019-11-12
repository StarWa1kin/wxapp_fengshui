// pages/wuxingRes/wuxingRes.js
// 规则
// 1 2土元素
// 3 4金元素
// 5 6木元素
// 7 8水元素
// 9 19 火元素


let app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    dislike: [],
    like: null,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let dislike = app.globalData.dislike;
    let like = app.globalData.like;

    this.setData({
      dislike: dislike,
      like: like
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    // wx.showTabBar({
    //   fail: function (res) {
    //   }
    // })
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

  }
})