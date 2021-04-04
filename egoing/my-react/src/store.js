import { createStore } from 'redux';

// 1st param : reducer 
export default createStore(function (state, action) {
    if (state === undefined) {
        // 최초의 실행
        return { number: 0 }
    }
    if (action.type === 'INCREMENT') {
        const newState = { ...state, number: state.number + action.size }
        console.log(newState)
        return newState
    }
    return state;
})