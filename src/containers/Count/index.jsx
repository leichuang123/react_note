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
