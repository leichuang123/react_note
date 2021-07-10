import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './index.css';

export default class index extends Component {
    //对接收的props进行：类型、必要性的限制
    static propTypes = {
        addTodo: PropTypes.func.isRequired,
    };
    //回车新增
    handleKeyUp = (event) => {
        if (event.keyCode !== 13) {
            return;
        }
        if (event.target.value.trim() === '') {
            alert('输入不能为空');
            return;
        }
        let isReapt = this.props.todos.filter((item) => {
            return item.name === event.target.value;
        });
        if (isReapt.length) {
            alert('输入重复');
            return;
        }
        const addObj = { id: this.props.todos.length + 1, name: event.target.value, done: false };
        this.props.addTodo(addObj);
        event.target.value = '';
    };
    render() {
        return (
            <div className="todo-header">
                <input type="text" placeholder="请输入你的任务名称，按回车键保存" onKeyUp={this.handleKeyUp} />
            </div>
        );
    }
}
