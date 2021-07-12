// reducer本质是个函数（上一个状态，action对象)，用于初始化和加工状态，并且返回新的state

const initState = 0;

export default function countReducer(preState = initState, action) {
    // 从action对象中获取type和data数据
    console.log(preState, action);
    const { type, data } = action;
    switch (type) {
        case 'increment':
            return preState + data;
        case 'decrement':
            return preState - data;
        // 初始化
        default:
            return preState;
    }
}
