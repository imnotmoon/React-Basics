import {
    LOGIN_USER, REGISTER_USER
} from '../_actions/types'


// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = {}, action) {
    switch(action.type) {
        case LOGIN_USER:
            // spread operator : 그냥 똑같이 가져온다.
            return {...state, loginSuccess: action.payload}
            break;
        
        case REGISTER_USER:
            return {...state, register: action.payload}
            break;
        
        default:
            return state;
            break;
    }
}