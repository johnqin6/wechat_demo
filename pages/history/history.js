Page({
    data:{
      // text:"这是一个页面"
      logs:[]
    },
    onLoad(options){
      // 页面初始化 options为页面跳转所带来的参数
      let logs = wx.getStorageSync('calclogs');
      this.setData({"logs":logs});
    },
    onReady(){
      // 页面渲染完成
    },
    onShow(){
      // 页面显示
    },
    onHide(){
      // 页面隐藏
    },
    onUnload(){
      // 页面关闭
    }
  })