// pages/home/home.js
import {
  global
} from '../../utils/globalFunc.js';
import {
  http,
  baseUrl
} from '../../utils/http.js';
Page({

  /**
   * 页面的初始数据
   */
  data: {
    banner: baseUrl + '/attachment/banner',
    yinyang: {},
    nowTime: '', //to show
    yourName: '', //to submit
    date: '', //picker to submit
    timeArr: [], //picker
    dayHours: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24],
    index: "",
    modalHidden: true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.getSystemInfo({
      success: (res) => {
        let nowHeig = res.windowHeight;
        console.log(nowHeig)
        this.setData({
          height: nowHeig
        })
      },
    })
    // wx.hideTabBar()
    // global.setNowtime(this);
    this.getTime();
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
  onPageScroll: function (e) {
    // if(e.scrollTop){
    //   wx.showTabBar()
    // }else{
    //   wx.hideTabBar()
    // }
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

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
  lookDetail() {
    wx.pageScrollTo({
      scrollTop: this.data.height,
      duration: 300,
      complete() {
        // wx.showTabBar()
      }
    })
  },
  getTime() {
    http({
      apiName: '/api/setNumber',
      method: 'post',
    })
      .then(res => {
        this.setData({
          yinyang: res
        })
      })
  },
  toMore() {
    wx.navigateTo({
      url: '../more/more',
    })
  },
  toToday() {
    wx.switchTab({
      url: '../jryq/jryq',
    })
  },
  toWuXing() {
    wx.navigateTo({
      url: '../wuxing/wuxing',
    })
  },
  toWater() {
    wx.switchTab({
      url: '../fs/fs'
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

    //验证名字是否输入
    // if (this.data.yourName == "") {
    //   wx.showToast({
    //     title: '请先输入您的姓名',
    //     icon: 'none'
    //   })
    //   return
    // } else {
    //   //整理date和姓名传输给后台
    //   let yourName = this.data.yourName.replace(/\s+/g, ""); //去除所有空格
    //   let yourDate = this.data.date;
    //   let yourHour = this.data.dayHours[this.data.index];
    //   wx.navigateTo({
    //     url: '../result/result',
    //   })
    // }
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