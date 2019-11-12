// pages/wuxing/wuxing.js
let app = getApp();
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
      //3
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
      //4
      [{
          name: '4-1',
          path: '../../images/colors/4/01.png'
        },
        {
          name: '4-2',
          path: '../../images/colors/4/02.png'
        },
        {
          name: '4-3',
          path: '../../images/colors/4/03.png'
        },
        {
          name: '4-4',
          path: '../../images/colors/4/04.png'
        },
        {
          name: '4-5',
          path: '../../images/colors/4/05.png'
        },
        {
          name: '4-6',
          path: '../../images/colors/4/06.png'
        },
        {
          name: '4-7',
          path: '../../images/colors/4/07.png'
        },
        {
          name: '4-8',
          path: '../../images/colors/4/08.png'
        },
        {
          name: '4-9',
          path: '../../images/colors/4/09.png'
        },
        {
          name: '4-10',
          path: '../../images/colors/4/10.png'
        },
        {
          name: '4-11',
          path: '../../images/colors/4/11.png'
        },
        {
          name: '4-12',
          path: '../../images/colors/4/12.png'
        }
      ],
      //5
      [{
          name: '5-1',
          path: '../../images/colors/5/01.png'
        },
        {
          name: '5-2',
          path: '../../images/colors/5/02.png'
        },
        {
          name: '5-3',
          path: '../../images/colors/5/03.png'
        },
        {
          name: '5-4',
          path: '../../images/colors/5/04.png'
        },
        {
          name: '5-5',
          path: '../../images/colors/5/05.png'
        },
        {
          name: '5-6',
          path: '../../images/colors/5/06.png'
        },
        {
          name: '5-7',
          path: '../../images/colors/5/07.png'
        },
        {
          name: '5-8',
          path: '../../images/colors/5/08.png'
        },
        {
          name: '5-9',
          path: '../../images/colors/5/09.png'
        },
        {
          name: '5-10',
          path: '../../images/colors/5/10.png'
        },
        {
          name: '5-11',
          path: '../../images/colors/5/11.png'
        },
        {
          name: '5-12',
          path: '../../images/colors/5/12.png'
        }
      ],
      //6
      [{
          name: '6-1',
          path: '../../images/colors/6/01.png'
        },
        {
          name: '6-2',
          path: '../../images/colors/6/02.png'
        },
        {
          name: '6-3',
          path: '../../images/colors/6/03.png'
        },
        {
          name: '6-4',
          path: '../../images/colors/6/04.png'
        },
        {
          name: '6-5',
          path: '../../images/colors/6/05.png'
        },
        {
          name: '6-6',
          path: '../../images/colors/6/06.png'
        },
        {
          name: '6-7',
          path: '../../images/colors/6/07.png'
        },
        {
          name: '6-8',
          path: '../../images/colors/6/08.png'
        },
        {
          name: '6-9',
          path: '../../images/colors/6/09.png'
        },
        {
          name: '6-10',
          path: '../../images/colors/6/10.png'
        },
        {
          name: '6-11',
          path: '../../images/colors/6/11.png'
        },
        {
          name: '6-12',
          path: '../../images/colors/6/12.png'
        }
      ],
      //7
      [{
          name: '7-1',
          path: '../../images/colors/7/01.png'
        },
        {
          name: '7-2',
          path: '../../images/colors/7/02.png'
        },
        {
          name: '7-3',
          path: '../../images/colors/7/03.png'
        },
        {
          name: '7-4',
          path: '../../images/colors/7/04.png'
        },
        {
          name: '7-5',
          path: '../../images/colors/7/05.png'
        },
        {
          name: '7-6',
          path: '../../images/colors/7/06.png'
        },
        {
          name: '7-7',
          path: '../../images/colors/7/07.png'
        },
        {
          name: '7-8',
          path: '../../images/colors/7/08.png'
        },
        {
          name: '7-9',
          path: '../../images/colors/7/09.png'
        },
        {
          name: '7-10',
          path: '../../images/colors/7/10.png'
        },
        {
          name: '7-11',
          path: '../../images/colors/7/11.png'
        },
        {
          name: '7-12',
          path: '../../images/colors/7/12.png'
        }
      ],
      //8
      [{
          name: '8-1',
          path: '../../images/colors/8/01.png'
        },
        {
          name: '8-2',
          path: '../../images/colors/8/02.png'
        },
        {
          name: '8-3',
          path: '../../images/colors/8/03.png'
        },
        {
          name: '8-4',
          path: '../../images/colors/8/08.png'
        },
        {
          name: '8-5',
          path: '../../images/colors/8/05.png'
        },
        {
          name: '8-6',
          path: '../../images/colors/8/06.png'
        },
        {
          name: '8-7',
          path: '../../images/colors/8/07.png'
        },
        {
          name: '8-8',
          path: '../../images/colors/8/08.png'
        },
        {
          name: '8-9',
          path: '../../images/colors/8/09.png'
        },
        {
          name: '8-10',
          path: '../../images/colors/8/10.png'
        },
        {
          name: '8-11',
          path: '../../images/colors/8/11.png'
        },
        {
          name: '8-12',
          path: '../../images/colors/8/12.png'
        }
      ],
      //9
      [{
          name: '9-1',
          path: '../../images/colors/9/01.png'
        },
        {
          name: '9-2',
          path: '../../images/colors/9/02.png'
        },
        {
          name: '9-3',
          path: '../../images/colors/9/03.png'
        },
        {
          name: '9-4',
          path: '../../images/colors/9/04.png'
        },
        {
          name: '9-5',
          path: '../../images/colors/9/05.png'
        },
        {
          name: '9-6',
          path: '../../images/colors/9/06.png'
        },
        {
          name: '9-7',
          path: '../../images/colors/9/07.png'
        },
        {
          name: '9-8',
          path: '../../images/colors/9/08.png'
        },
        {
          name: '9-9',
          path: '../../images/colors/9/09.png'
        },
        {
          name: '9-10',
          path: '../../images/colors/9/10.png'
        },
        {
          name: '9-11',
          path: '../../images/colors/9/11.png'
        },
        {
          name: '9-12',
          path: '../../images/colors/9/12.png'
        }
      ],
      //10
      [{
          name: '10-1',
          path: '../../images/colors/10/01.png'
        },
        {
          name: '10-2',
          path: '../../images/colors/10/02.png'
        },
        {
          name: '10-3',
          path: '../../images/colors/10/03.png'
        },
        {
          name: '10-4',
          path: '../../images/colors/10/04.png'
        },
        {
          name: '10-5',
          path: '../../images/colors/10/05.png'
        },
        {
          name: '10-6',
          path: '../../images/colors/10/06.png'
        },
        {
          name: '10-7',
          path: '../../images/colors/10/07.png'
        },
        {
          name: '10-8',
          path: '../../images/colors/10/08.png'
        },
        {
          name: '10-9',
          path: '../../images/colors/10/09.png'
        },
        {
          name: '10-10',
          path: '../../images/colors/10/10.png'
        },
        {
          name: '10-11',
          path: '../../images/colors/10/11.png'
        },
        {
          name: '10-12',
          path: '../../images/colors/10/12.png'
        }
      ],
    ],
    addStatus: [],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    wx.showTabBar({
      fail: function(err) {
        console.log(err)
      }
    })
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
  nextStep() {

    if (this.data.addStatus.length !== 6) {
      wx.showToast({
        title: '请选择6种不喜欢的颜色',
        icon: 'none'
      })
      return;
    }
    wx.navigateTo({
      url: '../wuxing2/wuxing2',
    })

    // 存储全局
    for (let val of this.data.addStatus) {
      app.globalData.dislike.push(val)
    }
  },
  choose(e) {

    if (this.data.addStatus.length >= 6) {
      return;
    }

    let id = e.currentTarget.id
    let firstIndex = id.split("-")[0] - 1;
    let secondIndex = id.split("-")[1] - 1;

    let cloneChoose = this.data.addStatus;
    let cloneColors = this.data.colors;
 
    if (cloneChoose.indexOf(this.data.colors[firstIndex][secondIndex]) == '-1') {
      // 加属性 加显示列表
      cloneColors[firstIndex][secondIndex].hidden = true;
      cloneChoose.push(cloneColors[firstIndex][secondIndex]);
    }
    this.setData({
      addStatus: cloneChoose,
      colors: cloneColors
    })

  },
  cancel(e) {
    let id = e.currentTarget.id;
    let cloneChoose = this.data.addStatus;
    for (let index in cloneChoose) {
      if (cloneChoose[index].name == id) {
        cloneChoose.splice(index, 1)
      }
    }
    this.setData({
      addStatus: cloneChoose
    })

    this.clearHidden(id);
  },
  clearHidden(id) {
    // hidden属性恢复
    let index1 = id.split("-")[0] - 1;
    let index2 = id.split("-")[1] - 1;
    let cloneColor = this.data.colors;
    cloneColor[index1][index2].hidden = false;
    this.setData({
      colors: cloneColor
    })
  }

})