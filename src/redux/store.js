// createStore方法创建store对象
// import { createStore } from 'redux';
// import countReducer from './count_reducer';

// export default createStore(countReducer);

import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import countReducer from './count_reducer';

export default createStore(countReducer, applyMiddleware(thunk));
