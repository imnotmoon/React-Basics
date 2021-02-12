import Axios from 'axios';
import {
    LOGIN_USER
} from './types'

export default function loginUser(dataToSubmit) {
    const request = Axios.post('/api/users/login', dataToSubmit)
    .then(response => response.data)

    return {
        type: "LOGIN_USER",
        payload: request
    }
}