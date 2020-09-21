import {POST_LOGIN} from '../actions/loginActions'

const initialLogin = {
    loginUser: []
}

export const loginReducer = (state = initialLogin, action) => {
    switch (action.type){
        case POST_LOGIN:
            return{
                ...state,
                loginUser: action.payload,

            }
        default:
            return state;
    }
}