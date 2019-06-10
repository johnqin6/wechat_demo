//demo.js

Page({
    data: {
        demoList: [
            { title: 'todoList', id: '2019060201', path: '../todoList/todoList' },
            { title: '计算器', id: '2019060301', path: '../calc/calc' },
            { title: '改良版计算器', id: '2019060301', path: '../counter/counter' }
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