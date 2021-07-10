import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Item from '../Item';
import './index.css';

export default class index extends Component {
    //对接收的props进行：类型、必要性的限制
    static propTypes = {
        todos: PropTypes.array.isRequired,
        updateTodo: PropTypes.func.isRequired,
        deleteTodo: PropTypes.func.isRequired,
    };

    render() {
        const { todos, updateTodo, deleteTodo } = this.props;
        if (!todos.length) {
            return <h4>暂无代办了!</h4>;
        } else {
            return (
                <ul className="todo-main">
                    {todos.map((todo) => {
                        return <Item key={todo.id} {...todo} updateTodo={updateTodo} deleteTodo={deleteTodo} />;
                    })}
                </ul>
            );
        }
    }
}
