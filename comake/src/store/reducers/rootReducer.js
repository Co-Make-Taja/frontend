import {issueReducer} from '../reducers/issueReducer'
import {loginReducer} from '../reducers/loginReducer'
import {registrationReducer} from '../reducers/registrationReducer'

import {combineReducers} from 'redux'

export const rootReducer = combineReducers({
    registerUser: registrationReducer,
    loginUser: loginReducer,
    issues: issueReducer
})