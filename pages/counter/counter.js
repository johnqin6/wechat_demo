Page({
    data: {
        result: '0',
        bgColor: '#f78d1d',
        numbers: ['0','1','2','3','4','5','6','7','8','9','.','+','-','x','÷'],
        operator: ['+','-','*','/'],
        logs: [],
        top: 90,
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
        ],
        query: null
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
        }
        else if(title === 'history'){
            this.setLog();
            return ;
        }else if(title === '='){
            result = this.returnResult(title);
        }
        this.setData({
            result: result
        });
        let query = wx.createSelectorQuery();
        query.select('#result').boundingClientRect(rect => {
            console.log(rect);
            if(rect.width > 360){
                this.setData({
                    top: 30
                });
            }
        }).exec();
        console.log(this.data.result);
    },
    //点击数字或点的处理函数
    handleNumberAndDot(val) {
        let len = this.data.result.length;
        let tepResult = this.data.result;
        let arr = ['+','.','-','x','÷'];
        //防止初次选零,运算符和点
        if(len === 1 && (val == 0 || arr.includes(val))){
            return '0';
        }else if(arr.includes(tepResult[len - 1]) && arr.includes(val)){ //防止连续选零,运算符和点
            return tepResult;
        }
        if(tepResult == 0){
            tepResult = '';
        }
        let result = tepResult;
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
    //建立历史记录
    setLog() {
        wx.navigateTo({
            url: '../history/history'
        });
    },
    //返回最终结果
    returnResult(val) {
        let tmpResult = this.data.result + val; //存储带等于号的字符串
        let reg = /\d+\.?\d*[+|\-|x|÷|=]/g;
        let arr = tmpResult.match(reg);
        let result = parseFloat(arr[0].slice(0,-1)); //初始值 
        for(let i = 0; i < arr.length - 1; i++){
            let num = arr[i + 1].slice(0,-1);
            if(arr[i][arr[i].length - 1] === '+'){
                result += parseFloat(num);
            }else if(arr[i][arr[i].length - 1] === '-'){
                result -= parseFloat(num);
            }else if(arr[i][arr[i].length - 1] === 'x'){
                result *= parseFloat(num);
            }else if(arr[i][arr[i].length - 1] === '÷'){
                result /= parseFloat(num);
            }
        }
        let logs = this.data.logs;
        logs.push(result);
        this.setData({
            logs: logs
        });
        wx.setStorageSync("calclogs", this.data.logs);
        return result;
    }
})