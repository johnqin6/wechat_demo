//demo.js

Page({
    data: {
        demoList: [
            { title: 'todoList', id: '2019060201', path: '../todoList/todoList' },
            { title: '计算器', id: '2019060301', path: '../calc/calc' },
        ]
    },
    onLoad() {
        console.log('onLoad')
    },
    //点击进入样例
    goDemoItem(e){
        let path = e.currentTarget.dataset.path;
        wx.navigateTo({
            url: path
        })
    }
});