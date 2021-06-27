import React, { Component } from 'react';
// import axios from 'axios';
import List from './components/List';
import Search from './components/Search';

export default class App extends Component {
    // 使用消息订阅发布后，就不需要在父组件中修改状态了
    // state = {
    //     isFirst: true,
    //     isLoading: false,
    //     isError: null,
    //     users: [],
    // };

    // 测试代理服务器是否正常
    // getData = () => {
    //     // axios.get('http://localhost:3000/index.html').then(
    //     axios.get('http://localhost:3000/api1/students').then(
    //         (res) => {
    //             console.log(res.data);
    //         },
    //         (error) => {
    //             console.log('失败了', error);
    //         }
    //     );
    // };

    // 接受子组件的回调，更新App的state
    updateAppState = (stateObj) => {
        this.setState(stateObj);
    };

    render() {
        // const { isFirst, isLoading, list } = this.state;
        return (
            <div className="container">
                {/* <button onClick={this.getData}>获取学生数据</button>

                {/* 父组件props回调通信 */}
                {/* <Search updateAppState={this.updateAppState} />
                <List {...this.state} /> */}

                {/* 消息订阅发布 */}
                <Search />
                <List />
            </div>
        );
    }
}
