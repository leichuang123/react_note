1.React-Redux 是 FackBook 出品的一个基于 redux 的官方组件库。
react-redux 把组件分为 2 类，一类是 ui 组件，一类是容器组件
所有的 ui 组件都被容器组件包裹，父子关系
只有容器组件可以和 redux 打交道，可以使用 reudx 的 api
ui 组件不能使用 redux 的 api
容器组件会传递 redux 的状态给 ui 组件展示 以及 操作状态的方法 props

react-redux 基本使用
(1).明确两个概念：
1).UI 组件:不能使用任何 redux 的 api，只负责页面的呈现、交互等。
2).容器组件：负责和 redux 通信，将结果交给 UI 组件。
(2).如何创建一个容器组件————靠 react-redux 的 connect 函数
connect(mapStateToProps,mapDispatchToProps)(UI 组件)
-mapStateToProps:映射状态，返回值是一个对象
-mapDispatchToProps:映射操作状态的方法，返回值是一个对象
(3).备注 1：容器组件中的 store 是靠 props 传进去的，而不是在容器组件中直接引入
(4).备注 2：mapDispatchToProps，也可以是一个对象

```js
//引入ui组件
import CountUI from '../../components/Count - react-redux/count';
// 引入action对象
import { createIncrementAction, createDecrementAction, createIncrementAsyncAction } from '../../redux/count_action';
// 引入connect用于连接ui组件和redux
import { connect } from 'react-redux';

/* 
	1.mapStateToProps函数返回的是一个对象；
	2.返回的对象中的key就作为传递给UI组件props的key,value就作为传递给UI组件props的value
	3.mapStateToProps用于传递状态
*/
function mapStateToProps(state) {
    return {
        count: state,
    };
}
/* 
	1.mapDispatchToProps函数返回的是一个对象；
	2.返回的对象中的key就作为传递给UI组件props的key,value就作为传递给UI组件props的value
	3.mapDispatchToProps用于传递操作状态的方法
*/
function mapDispatchToProps(dispatch) {
    return {
        increment: (number) => {
            console.log(number);
            // 通知redux执行 dispath(action)
            //dispatch({ type: 'crement', data: number });
            dispatch(createIncrementAction(number));
        },
        decrement: (number) => {
            // 通知redux执行 dispath(action)
            //dispatch({ type: 'decrement', data: number });
            dispatch(createDecrementAction(number));
        },
        incrementAsync: (number, time) => {
            console.log(number);
            dispatch(createIncrementAsyncAction(number, time));
        },
    };
}
// 调用connect()放回函数调用,让容器组件和ui组件建立联系,创建暴露一个容器组件
export default connect(mapStateToProps, mapDispatchToProps)(CountUI);
```
