import {POST_REGISTRATION} from '../actions/registrationActions'

const initialRegister = {
    registerUser: []
}

export const registrationReducer = (state = initialRegister, action) => {
    switch (action.type){
        case POST_REGISTRATION:
            return{
                ...state,
                registerUser: action.payload,
                registeringUser: false
            }
        default:
            return state;
    }
}