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
  }
}

export {
  global
}