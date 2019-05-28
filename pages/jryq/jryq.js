// pages/jryq/jryq.js
import { global } from '../../utils/globalFunc.js';
import {
  http,
  baseUrl
} from '../../utils/http.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    jryq: baseUrl + '/attachment/jryq',
    yourName:'',
    date: '', //picker to submit
    timeArr: [], //picker
    dayHours: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24],
    index: 0,
    modalHidden:true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    global.setNowtime(this);
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
  draw() {
    let yourName = this.data.yourName.replace(/\s+/g, ""); //去除所有空格
    let yourDate = this.data.date;
    let yourHour = this.data.dayHours[this.data.index];
    //modal提示
    if (yourName == "" || yourDate == "") {
      this.setData({
        modalHidden: false
      })
    } else {
      wx.navigateTo({
        url: '../result/result',
      })
    }
    // wx.navigateTo({
    //   url: '../result/result',
    // })
  },
  modalConfirm() {
    this.setData({
      modalHidden: true
    })
    wx.navigateTo({
      url: '../result/result',
    })
  },

  modalCandel() {
    this.setData({
      modalHidden: true
    })
  }
})