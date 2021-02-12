import {
    LOGIN_USER
} from '../_actions/types'


export default function (state = {}, action) {
    switch(action.type) {
        case LOGIN_USER:
            // spread operator : 그냥 똑같이 가져온다.
            return {...state, loginSuccess: action.payload}
            break;
        
        default:
            return state;
            break;
    }
}