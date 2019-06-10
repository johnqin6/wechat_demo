Page({
    data: {
        result: 0,
        bgColor: '#f78d1d',
        numbers: ['0','1','2','3','4','5','6','7','8','9','.'],
        operator: ['+','-','x','÷'],
        arr: [],
        keys: [
            [
                {title: "C", bgColor: '#f78d1d', width: '25%'},
                {title: "←", bgColor: '#f78d1d', width: '25%'},
                {title: "history", bgColor: '#f78d1d', width: '25%'},
                {title: "+", bgColor: '#f78d1d', width: '25%'}
            ],
            [
                {title: 9, bgColor: '#0095cd', width: '25%'},
                {title: 8, bgColor: '#0095cd', width: '25%'},
                {title: 7, bgColor: '#0095cd', width: '25%'},
                {title: "-", bgColor: '#f78d1d', width: '25%'}
            ],
            [
                {title: 6, bgColor: '#0095cd', width: '25%'},
                {title: 5, bgColor: '#0095cd', width: '25%'},
                {title: 4, bgColor: '#0095cd', width: '25%'},
                {title: "x", bgColor: '#f78d1d', width: '25%'}
            ],
            [
                {title: 3, bgColor: '#0095cd', width: '25%'},
                {title: 2, bgColor: '#0095cd', width: '25%'},
                {title: 1, bgColor: '#0095cd', width: '25%'},
                {title: "÷", bgColor: '#f78d1d', width: '25%'}
            ],
            [
                {title: 0, bgColor: '#0095cd', width: '50%'},
                {title: '.', bgColor: '#f78d1d', width: '25%'},
                {title: '=', bgColor: '#f78d1d', width: '25%'}
            ]
        ]
    },
    clickItem(e) {
        let title = e.currentTarget.id;
        let result = '';
        if(this.data.numbers.includes(title)) {
            result = this.handleNumberAndDot(title);
        }else if(title === 'C'){
            result = this.clearZero();
        }else if(title === '←'){
            result = this.backspace(this.data.result);
        }else if(this.data.operator(title)){
            result = this.handleOperator(title);
        }else if(title === 'history'){
            this.setLog();
        }else if(title === '='){
            result = this.returnResult();
        }
        this.setData({
            result: result
        });
        console.log(this.data.result,this.data.arr);
    },
    //点击数字或点的处理函数
    handleNumberAndDot(val) {
        let result = ''
        if(this.data.result === 0) {
            result = '';
        }else {
            result = this.data.result;
        }
        result += val;
        return result;
    },
    //清零
    clearZero() {
        return 0;
    },
    //退格
    backspace(val) {
        if(val.length <= 1) {
            val = 0;
        }else{
            val = val.slice(0, -1)
        }
        return val;
    },
    handleOperator(val) {
        let result = this.data.result + val;
        let arr = this.data.arr;
        arr[arr.length - 1] = this.data.result;
        arr[arr.length - 1] = val;
        return result;
    },
    //建立历史记录
    setLog() {

    },
    //返回最终结果
    returnResult() {
        let result = this.data.result;
        let arr = ['+','-','x','']
    }
})