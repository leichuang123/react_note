import React, { Component } from 'react';
import './list.css';
import PubSub from 'pubsub-js';

export default class index extends Component {
    state = {
        //初始化状态
        users: [], //users初始值为数组
        isFirst: true, //是否为第一次打开页面
        isLoading: false, //标识是否处于加载中
        err: '', //存储请求相关的错误信息
    };
    componentDidMount() {
        // 初始化，组件加载挂载消息订阅
        this.token = PubSub.subscribe('searchUser', (_, stateObj) => {
            this.setState(stateObj);
        });
    }

    componentWillUnmount() {
        // 组件卸载消息订阅
        PubSub.unsubscribe(this.token);
    }

    render() {
        //const { isFirst, isLoading, users, isError } = this.props;
        const { isFirst, isLoading, users, isError } = this.state;
        return (
            <div>
                {isFirst ? (
                    '请输入关键字搜索！'
                ) : isLoading ? (
                    '数据加载中...'
                ) : isError ? (
                    <h2 style={{ color: 'red' }}>{isError}</h2>
                ) : !users.length ? (
                    <h2 style={{ color: 'red' }}>暂无数据</h2>
                ) : (
                    users.map((item) => {
                        return (
                            <div className="row" key={item.id}>
                                <div className="card">
                                    <a href={item.html_url} target="_blank">
                                        <img
                                            rel="noreferrer"
                                            target="_blank"
                                            src={item.avatar_url}
                                            className="width100"
                                        />
                                    </a>
                                    <p className="card-text">{item.login}</p>
                                </div>
                            </div>
                        );
                    })
                )}
            </div>
        );
    }
}
