import React, { Component } from 'react';
// import { Link, Route } from 'react-router-dom';
import './App.less';

import { NavLink, Route, Redirect, Switch } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Header from './components/Header';

export default class App extends Component {
    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-xs-offset-2 col-xs-8">
                        <Header></Header>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-2 col-xs-offset-2">
                        <div className="list-group">
                            {/* <Link className="list-group-item" to="/about">
                                About
                            </Link>
                            <Link className="list-group-item" to="/home">
                                Home
                            </Link> */}
                            <NavLink activeClassName="current-slect-nav" className="list-group-item" to="/about">
                                About
                            </NavLink>
                            <NavLink activeClassName="current-slect-nav" className="list-group-item" to="/home">
                                Home
                            </NavLink>
                        </div>
                    </div>
                    <div className="col-xs-6">
                        <div className="panel">
                            <div className="panel-body">
                                {/* 注册路由 */}
                                <Switch>
                                    <Route path="/about" component={About} />
                                    <Route path="/home" component={Home} />
                                    <Redirect to="/about"></Redirect>
                                </Switch>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
