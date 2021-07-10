import React, { Component } from 'react';
// css模块化，如果css直接引入或者不使用less嵌套区分，否正会打包在一个css文件中，后面的样式会覆盖前面的样式
import example from './index.module.css';

export default class index extends Component {
    state = {
        msg1: 'example',
    };
    render() {
        const { msg1 } = this.state;
        return <div className={example.title}>{msg1}</div>;
    }
}
