import {issueReducer} from '../reducers/issueReducer'
import {loginReducer} from '../reducers/loginReducer'
import {registrationReducer} from '../reducers/registrationReducer'

import {combineReducers} from 'redux'


//consider using combinereducer to seperate these into 3 files



export const rootReducer = combineReducers({
    registerUser: registrationReducer,
    loginUser: loginReducer,
    issues: issueReducer
})