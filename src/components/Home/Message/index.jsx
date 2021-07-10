import React, { Component } from 'react';
import Detail from './Detail';
import { Switch, Link, Route } from 'react-router-dom';

export default class Message extends Component {
    state = {
        messageArr: [
            { id: '01', title: '消息1' },
            { id: '02', title: '消息2' },
            { id: '03', title: '消息3' },
        ],
    };
    // replace跳转
    replaceJump = (id, title) => {
        this.props.history.replace(`/home/message/detail`, { id, title });
    };
    // push跳转
    pushJump = (id, title) => {
        this.props.history.push(`/home/message/detail`, { id, title });
    };
    //前进
    forward = () => {
        this.props.history.goForward();
    };
    //后退
    back = () => {
        this.props.history.goBack();
    };
    // go
    go = () => {
        this.props.history.go(0);
    };
    render() {
        const { messageArr } = this.state;
        return (
            <div>
                <ul>
                    {messageArr.map((item) => {
                        return (
                            <li key={item.id}>
                                {/* 向路由组件传递params参数 */}
                                {/* <span>向路由组件传递params参数</span>
                                <Link to={`/home/message/detail/${item.id}/${item.title}`}>
                                    {'params参数' + item.title}
                                </Link> */}

                                {/* 向路由组件传递search:query参数 */}
                                {/* <span>向路由组件传递search:query参数</span>
                                <Link to={`/home/message/detail/?id=${item.id}&title=${item.title}`}>
                                    {'search参数' + item.title}
                                </Link> */}

                                {/* 向路由组件传递state参数 */}
                                <span>向路由组件传递state参数</span>
                                <Link
                                    replace={true}
                                    to={{ pathname: '/home/message/detail', state: { id: item.id, title: item.title } }}
                                >
                                    {'state参数' + item.title}
                                </Link>
                                <button onClick={() => this.replaceJump(item.id, item.title)}>replace</button>
                                <button onClick={() => this.pushJump(item.id, item.title)}>push</button>
                            </li>
                        );
                    })}
                </ul>
                <div>
                    <Switch>
                        {/* 声明接收params参数 */}
                        {/* <Route path="/home/message/detail/:id/:title" component={Detail} /> */}
                        {/* 声明接收search参数 */}
                        {/* <Route path="/home/message/detail" component={Detail}></Route> */}
                        {/* 声明接收state参数 */}
                        <Route path="/home/message/detail" component={Detail}></Route>
                    </Switch>
                </div>
                <div>
                    <button onClick={this.back}>回退</button>
                    <button onClick={this.forward}>前进</button>
                    <button onClick={this.go}>前进n步</button>
                </div>
            </div>
        );
    }
}
