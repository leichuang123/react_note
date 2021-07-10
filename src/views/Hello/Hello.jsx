import React, { Component } from 'react';
import hello from './hello.module.css';

export default class Hello extends Component {
    state = {
        msg: 'hello world!',
    };
    render() {
        const { msg } = this.state;
        return <div className={hello.title}>{msg}</div>;
    }
}
