import React, { Component } from 'react';
import './App.less';
// 使用容器组件后就不需要引入ui组件了
import store from './redux/store';
import Count from './containers/Count';

export default class App extends Component {
    render() {
        return (
            <div>
                <Count store={store}></Count>
            </div>
        );
    }
}
