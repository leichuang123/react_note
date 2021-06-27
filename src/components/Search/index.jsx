import React, { Component } from 'react';
import axios from 'axios';
import PubSub from 'pubsub-js';

export default class index extends Component {
    serach = async () => {
        const {
            getInputValue: { value: keyWord },
        } = this;
        if (keyWord.trim() == '') {
            alert('请输入关键字搜索！');
            return;
        }
        //发送请求前通知App更新状态
        //this.props.updateAppState({ isFirst: false, isLoading: true });
        // 使用消息发布订阅模式
        PubSub.publish('searchUser', { isFirst: false, isLoading: true });
        //使用axios发送网络请求
        // axios.get(`/api2/search/users?q=${keyWord}`).then(
        //     (response) => {
        //         //请求成功后通知App更新状态
        //         // this.props.updateAppState({ isLoading: false, users: response.data.items });
        //         PubSub.publish('searchUser', { isLoading: false, users: response.data.items });
        //     },
        //     (error) => {
        //         //请求失败后通知App更新状态
        //         //this.props.updateAppState({ isLoading: false, err: error.message });
        //         PubSub.publish('searchUser', { isLoading: false, err: error.message });
        //     }
        // );
        //发送网络请求---使用fetch发送（未优化）
        //     fetch(`/api2/search/users2?q=${keyWord}`)
        //         .then(
        //             (response) => {
        //                 console.log('联系服务器成功了');
        //                 return response.json();
        //             },
        //             (error) => {
        //                 console.log('联系服务器失败了', error);
        //                 return new Promise(() => {});
        //             }
        //         )
        //         .then(
        //             (response) => {
        //                 console.log('获取数据成功了', response);
        //             },
        //             (error) => {
        //                 console.log('获取数据失败了', error);
        //             }
        //         );
        //发送网络请求---使用fetch发送（优化）
        try {
            const response = await fetch(`/api2/search/users2?q=${keyWord}`);
            const data = await response.json();
            console.log(data);
            PubSub.publish('searchUser', { isLoading: false, users: data.items });
        } catch (error) {
            console.log('请求出错', error);
            PubSub.publish('searchUser', { isLoading: false, err: error.message });
        }
    };
    render() {
        return (
            <section className="jumbotron">
                <h3 className="jumbotron-heading">Search Github Users</h3>
                <div>
                    <input type="text" placeholder="请输入姓名" ref={(c) => (this.getInputValue = c)} />
                    &nbsp;<button onClick={this.serach}>Search</button>
                </div>
            </section>
        );
    }
}
