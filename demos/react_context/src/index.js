/*
 * @Author: weiu.cao
 * @Date: 2019-06-21 15:13:21
 * @Last Modified by: weiju.cao
 * @Last Modified time: 2019-06-21 19:52:42
*/
'use strict';
import List from './components/list/index.js';
const initLenContext = {
        chLan: 'ch',
        enLan: 'en',
        listOne: [
            {
                en: 'Apple',
                ch: '苹果'
            },
            {
                en: 'wifi',
                ch: '无线'
            },
            {
                en: 'test',
                ch: '测试'
            }
        ],
        listTwo: [
            {
                en: 'telphone',
                ch: '手机'
            },
            {
                en: 'drink',
                ch: '饮酒'
            },
            {
                en: 'computer',
                ch: '电脑'
            }
        ],
        listThree: [
            {
                en: 'pen',
                ch: '笔'
            },
            {
                en: 'game',
                ch: '游戏'
            },
            {
                en: 'action',
                ch: '活动'
            }
        ]
    };

export const LenContext = React.createContext({list: initLenContext.listOne, currLan: initLenContext.chLan}); // 默认值：只有没有匹配的context的时候才生效 provider传递空值是不生效

class App extends React.Component {
    state = {
        list: initLenContext.listTwo,
        currLan: initLenContext.chLan,
    }
    constructor(props) {
        super(props);
        this.changCurreLan = this.changCurreLan.bind(this);
    }
    changCurreLan(currLan='ch') {
        currLan && this.setState({currLan});
    }
    
    render() {
        const {list, currLan} = this.state;
        return (
        <LenContext.Provider value={{list, currLan}}>
            <List changCurreLan={this.changCurreLan} />
        </LenContext.Provider>
        );
    }
}

let domContainer = document.querySelector('#root');
ReactDOM.render(<App />, domContainer);