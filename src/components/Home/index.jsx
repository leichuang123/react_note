import React, { Component } from 'react';
import News from './News';
import Message from './Message';
import { NavLink, Route, Redirect, Switch } from 'react-router-dom';

export default class Home extends Component {
    render() {
        return (
            <div>
                <h3>我是Home的内容</h3>
                <div>
                    <ul className="nav nav-tabs">
                        <li>
                            <NavLink activeClassName="current-slect-nav" to="/home/news">
                                News
                            </NavLink>
                        </li>
                        <li>
                            <NavLink activeClassName="current-slect-nav" to="/home/message">
                                Message
                            </NavLink>
                        </li>
                    </ul>
                    {/* 注册home下的子路由 */}
                    <Switch>
                        <Route path="/home/news" component={News} />
                        <Route path="/home/message" component={Message} />
                        <Redirect to="/home/news" />
                    </Switch>
                </div>
            </div>
        );
    }
}
