// pages/home/home.js
import {
  global
} from '../../utils/globalFunc.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    nowTime: '', //to show
    yourName: '', //to submit
    date: '', //picker to submit
    timeArr: [], //picker
    dayHours: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24],
    index: 0,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    global.setNowtime(this)

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
  // setNowtime() {
  //   let time = new Date();
  //   let year = time.toLocaleDateString();
  //   let hour = time.getHours();
  //   for (let index in this.data.dayHours) {
  //     if (this.data.dayHours[index] == hour) {
  //       this.setData({
  //         index: index
  //       })
  //     }
  //   }
  //   let arr = year.split("/");
  //   this.setData({
  //     timeArr: arr,
  //     date: arr.join("-")
  //   })

  // },
  toToday(){
    wx.switchTab({
      url: '../jryq/jryq',
    })
  },
  toWater() {
    wx.switchTab({
      url: '../fs/fs',
    })
  },
  toDao() {
    wx.switchTab({
      url: '../gcdg/gcdg',
    })
  },
  bindKeyInput(e) {
    this.setData({
      yourName: e.detail.value
    })
  },
  bindDateChange(e) {
    let timeArr = e.detail.value.split("-");
    this.setData({
      date: e.detail.value,
      timeArr: timeArr
    })
  },
  bindHourPicker(e) {
    this.setData({
      index: e.detail.value
    })
  },
  draw() {
    //验证名字是否输入
    if (this.data.yourName == "") {
      wx.showToast({
        title: '请先输入您的姓名',
        icon: 'none'
      })
      return
    } else {
      //整理date和姓名传输给后台
      let yourName = this.data.yourName.replace(/\s+/g, ""); //去除所有空格
      let yourDate = this.data.date;
      let yourHour = this.data.dayHours[this.data.index];
      debugger
      wx.navigateTo({
        url: '../result/result',
      })
    }
  }
})