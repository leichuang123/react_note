#1.redux 是什么
redux 是一个专门用于做状态管理的 JS 库(不是 react 插件库)。
它可以用在 react, angular, vue 等项目中, 但基本与 react 配合使用。
作用: 集中式管理 react 应用中多个组件共享的状态

#2.store
1).引入 redux 中的 createStore 函数，创建一个 store
2).createStore 调用时要传入一个为其服务的 reducer
3).记得暴露 store 对象

```js
// createStore 方法创建 store 对象
import { createStore, applyMiddleware } from 'redux';
import countReducer from './count_reducer';
export default createStore(countReducer);


//引入 redux-thunk，用于支持异步 action
import thunk from 'redux-thunk';
export default createStore(countReducer,applyMiddleware(thunk));
```

#3.action 对象，action 一般为对象（同步 action），还有异步 action（函数 action,只有函数才能开启异步任务）,异步的 action 需要使用中间件 redux-thunk 让 store 支持和识别函数类型的 action，并且在 createStore 中第二个参数 applyMiddleware（）调用，详见上面代码

```js
//  创建 action 对象
export const createIncrementAction = (data) => ({ type: 'increment', data });
export const createDecrementAction = (data) => ({ type: 'decrement', data });

//异步 action，就是指 action 的值为函数,异步 action 中一般都会调用同步 action，异步 action 不是必须要用的。
export const createIncrementAsyncAction = (data, time) => {
    return (dispatch) => {
        setTimeout(() => {
            dispatch(createIncrementAction(data));
        }, time);
    };
};
```

#4.reducer
 1).reducer 的本质是一个函数，接收：preState,action，返回加工后的状态
2).reducer 有两个作用：初始化状态，加工状态
 3).reducer 被第一次调用时，是 store 自动触发的，
       传递的 preState 是 undefined,
       传递的 action 是:{type:'@@REDUX/INIT\*a.2.b.4}

```js
// reducer 本质是个函数（上一个状态，action 对象)，用于初始化和加工状态，并且返回新的 state
const initState = 0;
export default function countReducer(preState = initState, action) {
    //  从 action 对象中获取 type 和 data 数据
    console.log(preState, action);
    const { type, data } = action;
    switch (type) {
        case 'increment':
            return preState + data;
        case 'decrement':
            return preState - data; //  初始化
        default:
            return preState;
    }
}
```

#5.使用 dispath 分发 action 对象，使用 getStore()获取状态，使用 store.subscribe()更新显示

```js
import store from '../../redux/store';
//  引入 action
import { createIncrementAction, createDecrementAction } from '../../redux/count_action';
componentDidMount() {
    //  检查 redux 状态变化，调用 render
    store.subscribe(() => {
        this.setState({});
        //this.forceUpdate();
    });
}
//store.dispatch({ type: 'increment', data: selectNumber * 1 });
store.dispatch(createIncrementAction(selectNumber * 1));
//store.dispatch({ type: 'decrement', data: selectNumber * 1 });
store.dispatch(createDecrementAction(selectNumber * 1));
//为了让 action 的 type 和 reducer 的 type 便于维护，防止写错，定义了常量文件，在 action 和对应 reducer 文件中引用
```

```js
/* 
     该模块是用于定义 action 对象中 type 类型的常量值，目的只有一个：便于管理的同时防止程序员单词写错
\_/
export const INCREMENT = 'increment'
export const DECREMENT = 'decrement'
```

---

#备注：
(1).去除 Count 组件自身的状态
(2).src 下建立:
-redux
-store.js
-count_reducer.js

    	(3).store.js：
    				1).引入redux中的createStore函数，创建一个store
    				2).createStore调用时要传入一个为其服务的reducer
    				3).记得暴露store对象

    	(4).count_reducer.js：
    				1).reducer的本质是一个函数，接收：preState,action，返回加工后的状态
    				2).reducer有两个作用：初始化状态，加工状态
    				3).reducer被第一次调用时，是store自动触发的，
    								传递的preState是undefined,
    								传递的action是:{type:'@@REDUX/INIT_a.2.b.4}

    	(5).在index.js中监测store中状态的改变，一旦发生改变重新渲染<App/>
    			备注：redux只负责管理状态，至于状态的改变驱动着页面的展示，要靠我们自己写。

    	新增文件：
    		1.count_action.js 专门用于创建action对象
    		2.constant.js 放置容易写错的type值，常量文件

redux 异步 action 版
(1).明确：延迟的动作不想交给组件自身，想交给 action
(2).何时需要异步 action：想要对状态进行操作，但是具体的数据靠异步任务返回。
(3).具体编码：
1).yarn add redux-thunk，并配置在 store 中
2).创建 action 的函数不再返回一般对象，而是一个函数，该函数中写异步任务。
3).异步任务有结果后，分发一个同步的 action 去真正操作数据。
(4).备注：异步 action 不是必须要写的，完全可以自己等待异步任务的结果了再去分发同步 action。
