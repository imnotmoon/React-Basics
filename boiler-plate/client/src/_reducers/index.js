import { combineReducers } from 'redux'
// import user from './user_reducer'

const rootReducer = combineReducers({
    // user,
})

export default rootReducer;


// store가 있는데 여러가지 리듀서가 있을 수 있음.
// Reducer 안에서 하는 일이 어떻게 state가 변하는지를 보여준 다음에 결과를 리턴함.
// ex) user에 관한 리듀서, comment에 관한 리듀서, register에 관한 리듀서...
//      => combineReducer를 이용해서 rootReducer에서 하나로 합칠 것.