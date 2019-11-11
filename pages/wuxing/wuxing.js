// pages/wuxing/wuxing.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    colors: [
      [{
        name: '1-1',
        path: '../../images/colors/1/01.png'
      },
      {
        name: '1-2',
        path: '../../images/colors/1/02.png'
      },
      {
        name: '1-3',
        path: '../../images/colors/1/03.png'
      },
      {
        name: '1-4',
        path: '../../images/colors/1/04.png'
      },
      {
        name: '1-5',
        path: '../../images/colors/1/05.png'
      },
      {
        name: '1-6',
        path: '../../images/colors/1/06.png'
      },
      {
        name: '1-7',
        path: '../../images/colors/1/07.png'
      },
      {
        name: '1-8',
        path: '../../images/colors/1/08.png'
      },
      {
        name: '1-9',
        path: '../../images/colors/1/09.png'
      },
      {
        name: '1-10',
        path: '../../images/colors/1/10.png'
      },
      {
        name: '1-11',
        path: '../../images/colors/1/11.png'
      },
      {
        name: '1-12',
        path: '../../images/colors/1/12.png'
      }
      ],
      //2
      [{
        name: '2-1',
        path: '../../images/colors/2/01.png'
      },
      {
        name: '2-2',
        path: '../../images/colors/2/02.png'
      },
      {
        name: '2-3',
        path: '../../images/colors/2/03.png'
      },
      {
        name: '2-4',
        path: '../../images/colors/2/04.png'
      },
      {
        name: '2-5',
        path: '../../images/colors/2/05.png'
      },
      {
        name: '2-6',
        path: '../../images/colors/2/06.png'
      },
      {
        name: '2-7',
        path: '../../images/colors/2/07.png'
      },
      {
        name: '2-8',
        path: '../../images/colors/2/08.png'
      },
      {
        name: '2-9',
        path: '../../images/colors/2/09.png'
      },
      {
        name: '2-10',
        path: '../../images/colors/2/10.png'
      },
      {
        name: '2-11',
        path: '../../images/colors/2/11.png'
      },
      {
        name: '2-12',
        path: '../../images/colors/2/12.png'
      }
      ],
      //
      [{
        name: '3-1',
        path: '../../images/colors/3/01.png'
      },
      {
        name: '3-2',
        path: '../../images/colors/3/02.png'
      },
      {
        name: '3-3',
        path: '../../images/colors/3/03.png'
      },
      {
        name: '3-4',
        path: '../../images/colors/3/04.png'
      },
      {
        name: '3-5',
        path: '../../images/colors/3/05.png'
      },
      {
        name: '3-6',
        path: '../../images/colors/3/06.png'
      },
      {
        name: '3-7',
        path: '../../images/colors/3/07.png'
      },
      {
        name: '3-8',
        path: '../../images/colors/3/08.png'
      },
      {
        name: '3-9',
        path: '../../images/colors/3/09.png'
      },
      {
        name: '3-10',
        path: '../../images/colors/3/10.png'
      },
      {
        name: '3-11',
        path: '../../images/colors/3/11.png'
      },
      {
        name: '3-12',
        path: '../../images/colors/3/12.png'
      }
      ],
    ],
    addStatus: [],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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
  nextStep() {
    wx.navigateTo({
      url: '../wuxing2/wuxing2',
    })
  },
  choose(e) {
    let id = e.currentTarget.id
    let firstIndex = id.split("-")[0] - 1;
    let secondIndex = id.split("-")[1] - 1;

    let cloneChoose = this.data.addStatus;
    cloneChoose.push(this.data.colors[firstIndex][secondIndex])

    if (this.data.addStatus.length == 6) {
      return;
    }

    this.setData({
      addStatus: cloneChoose
    })

    console.log(this.data.addStatus)
  },
  cancel(e) {
    let id = e.currentTarget.id;
    let cloneChoose = this.data.addStatus;
    for (let index in cloneChoose) {
      if (cloneChoose[index].name == id) {
        console.log(index)
      }
    }
  }

})