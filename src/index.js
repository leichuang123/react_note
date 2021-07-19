//引入react核心库
import React from 'react';
//引入ReactDOM
import ReactDOM from 'react-dom';
//引入App
import App from './App';
import store from './redux/store';

ReactDOM.render(<App />, document.getElementById('root'));
// 监听redux中状态的改变，重新渲染app组件
store.subscribe(() => {
    ReactDOM.render(<App />, document.getElementById('root'));
});
