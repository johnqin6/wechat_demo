//demo.js
const util = require('../../utils/util.js')
Page({
    //定义页面变量
  data: {
    list: [],
    value: '',
    isChecked: true,
    stepValue: '', //保存编辑的值
    finishList: [], //已完成事项
    dealList: [],  //待完成事项
    handleStateArr: [
      { title: '完成', id: 1001, checked: false },
      { title: '未完成', id: 1001, checked: false },
    ]  
  },
  //输入时改变value值
  setValue(e) {
    this.setData({
        value: e.detail.value
    });
  },
  //聚焦时清空值
  clearValue() {
    this.setData({
        value: ''
    });
  },
  //新增事项
  add(e) {
    if(!this.data.value || !this.data.value.trim()) {
        wx.showToast({
            title: '请输入内容！',
            icon: 'none',
            duration: 2000
        });
        return;
    }
    let arr = this.data.list;
    arr.push({
        'title': this.data.value,
        'id': util.randomId(),
        'isChoose': false,
        'isedit': false,
        'time': util.fromateTime()
    });
    this.setData({
        list: arr
    });
  },
  //编辑事项
  edit(e) {
    let id = e.currentTarget.dataset.id;
    let list = this.data.list;
    list = list.map(item => {
      if(item.id === id){
        item.isedit = true;
      }
      return item;
    });
    this.setData({
      list: list
    });
  },
  //删除事项
  delete(e) {
    let id = e.currentTarget.dataset.id;
    let list = this.data.list.filter(item => {
      return item.id !== id;
    });
    this.setData({
      list: list
    });
  },
  //设置每一项输入的值
  setItemTitle(e) {
    this.setData({
      stepValue: e.detail.value
    });
  },
  //编辑标题
  editTitle(e) {
    let id = e.currentTarget.dataset.id;
    let list = this.data.list;
    list = list.map(item => {
      if(item.id === id){
        item.title = this.data.stepValue
        item.isedit = false;
      }
      return item;
    });
    let finish = list.filter(item => {
      return item.isChoose;
    });
    let deallist = list.filter(item => {
      return !item.isChoose;
    });
    this.setData({
      list: list,
      finishList: finish, 
      dealList: deallist,
    });
  },
  //完成事项
  checkboxChange(e) {
    this.setData({
      finishList: [], 
      dealList: []  
    });
    let list = this.data.list;
    let finish = [];
    let deallist = [];
    let arr = e.detail.value;
    list = list.map(item => {
      if(arr.indexOf(item.id) == -1 || arr.length <= 0){
        item.isChoose = false;
      }else{
        item.isChoose = true;
      }
      return item;
    })
    finish = list.filter(item => {
      return item.isChoose;
    });
    deallist = list.filter(item => {
      return !item.isChoose;
    });
    this.setData({
      finishList: finish, 
      dealList: deallist,
      list: list,
    });
  },
  //展示完成或已完成的事项
  switchChange(e) {
    this.setData({
      isChecked: e.detail.value
    });
  }
  
});