import React, { Component } from 'react';

export default class index extends Component {
    // 全选反选
    changeAll = (event) => {
        this.props.changeAll(event.target.checked);
    };
    // 清除已完成的todo
    clearAllDone = () => {
        if (!this.props.todos.length) {
            return;
        }
        this.props.clearAllDone();
    };

    render() {
        const { todos } = this.props;
        const totalCount = todos.length;
        const hasDone = todos.reduce((pre, todo) => pre + (todo.done ? 1 : 0), 0);
        return (
            <div>
                <div className="todo-footer">
                    <label>
                        <input
                            type="checkbox"
                            onChange={this.changeAll}
                            checked={hasDone === totalCount && totalCount !== 0 ? true : false}
                        />
                    </label>
                    <span>
                        <span>已完成{hasDone}</span> / 全部{totalCount}
                    </span>
                    <button className="btn btn-danger" onClick={this.clearAllDone}>
                        清除已完成的任务
                    </button>
                </div>
            </div>
        );
    }
}
