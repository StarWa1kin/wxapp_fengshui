// pages/fs/fs.js
import {
  global
} from '../../utils/globalFunc.js';
Page({

  /**
   * 页面的初始数据
   */
  data: {
    angle: '',
    rotate: '',
    direction: '',
    isLocked:false,
    coordinate: null,
    yourName: '',
    date: '', //picker to submit
    timeArr: [], //picker
    dayHours: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24],
    index: 0,
    orientation: ["东方", "东南方", "南方", "西南方", "西方", "西北方", "北方", "东北方"],
    bedroom: 0,
    door: 1,
    hearth: 1,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    global.setNowtime(this);
    this.compass()
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
  //获取当前方向
  compass() {
    wx.onCompassChange(res => {
      // 罗盘数据保留两位小数
      let directions = res.direction.toFixed(2);
      let radios = res.direction.toFixed(0);
      this.setData({
        angle: directions,
        rotate: 360 - radios,
        direction: check(radios)
      })
    });
    // 判断文字
    function check(i) {
      if (15 <= i && i <= 75) {
        return '东北'
      } else if (75 < i && i < 105) {
        return '正东'
      } else if (105 <= i && i <= 165) {
        return '东南'
      } else if (165 < i && i < 195) {
        return '正南'
      } else if (195 <= i && i <= 255) {
        return '西南'
      } else if (255 < i && i < 285) {
        return '正西'
      } else if (285 <= i && i <= 345) {
        return '西北'
      } else {
        return '正北'
      }
    }
  },
  lockCompass(){
    let isLocked=!this.data.isLocked;
    this.setData({
      isLocked
    })
    if(isLocked){
      wx.stopCompass();
    }else{
      this.compass()
    }
  },
  //获取当前经纬度
  getLocation() {
    wx.getLocation({
      altitude: true,
      type: 'wgs84',
      success: res => {
        let latitude = res.latitude.toFixed(2).split(".")
        let longitude = res.longitude.toFixed(2).split(".")
        let altitude = res.altitude.toFixed(1)
        let obj = {
          latitude,
          longitude,
          altitude
        }
        this.setData({
          coordinate: obj
        })
      }
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
  bindRoomPicker(e) {
    this.setData({
      bedroom: e.detail.value
    })
  },
  bindDoorPicker(e) {
    this.setData({
      door: e.detail.value
    })
  },
  bindHearthPicker(e) {
    this.setData({
      hearth: e.detail.value
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
      let bedromm = this.data.orientation[this.data.bedroom];
      let door = this.data.orientation[this.data.door];
      let hearth = this.data.orientation[this.data.hearth];
      debugger
      // wx.navigateTo({
      //   url: '../result/result',
      // })
    }
  }
})