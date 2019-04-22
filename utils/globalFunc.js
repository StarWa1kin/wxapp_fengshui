let global = {
  setNowtime(self) {
    let time = new Date();
    let year = time.toLocaleDateString();
    let hour = time.getHours();
    for (let index in self.data.dayHours) {
      if (self.data.dayHours[index] == hour) {
        self.setData({
          index: index
        })
      }
    }
    let arr = year.split("/");
    self.setData({
      timeArr: arr,
      date: arr.join("-")
    })
  },
  conversionParam(param1,param2){
    let res;
    switch(param1){
      case '东方': res="1"; break;
      case '西方': res = "2"; break;
      case '北方': res = "3"; break;
      case '南方': res = "4"; break;
      case '东南方': res = "5"; break;
      case '西南方': res = "6"; break;
      case '西北方': res = "7"; break;
      case '东北方': res = "8"; break;
    }
    switch (param2) {
      case '东方': res += "1"; break;
      case '西方': res += "2"; break;
      case '北方': res += "3"; break;
      case '南方': res += "4"; break;
      case '东南方': res += "5"; break;
      case '西南方': res += "6"; break;
      case '西北方': res += "7"; break;
      case '东北方': res += "8"; break;
    }
    return res;
  }
}

export {
  global
}