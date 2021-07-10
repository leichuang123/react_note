import React, { Component } from 'react';
import './index.css';

export default class index extends Component {
    state = {
        mouse: false, //鼠标是否是否移入
    };
    // 悬浮显示删除按钮
    showDeleButton = (type) => {
        return () => {
            this.setState({
                mouse: type,
            });
        };
    };
    //勾选、取消勾选某一个todo的回调
    handleCheck = (id) => {
        return (event) => {
            this.props.updateTodo(id, event.target.checked);
        };
    };

    // 删除
    handleDelete = (id) => {
        if (window.confirm('确定删除吗？')) {
            this.props.deleteTodo(id);
        }
    };

    render() {
        const { mouse } = this.state;
        const { id, name, done } = this.props;
        return (
            <li onMouseEnter={this.showDeleButton(true)} onMouseLeave={this.showDeleButton(false)}>
                <label>
                    <input type="checkbox" checked={done} onChange={this.handleCheck(id)} />
                    <span>{name}</span>
                </label>
                <button
                    className="btn btn-danger"
                    style={{ display: !mouse ? 'none' : 'block' }}
                    onClick={() => this.handleDelete(id)}
                >
                    删除
                </button>
            </li>
        );
    }
}
