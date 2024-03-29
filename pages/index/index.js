//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
      motto: 'hellow',
      userInfo: {}
  },
  //事件处理函数
  bindViewTap() {
    wx.navigateTo({
        url: "../logs/logs"
    });
  },
  onLoad() {
      console.log('onLoad');
      let that = this;
      //调用应用实例的方法获取全局数据
      app.getUserInfo(userInfo => {
          //更新数据
          that.setData({
              userInfo: userInfo
          });
      })
  }
})
