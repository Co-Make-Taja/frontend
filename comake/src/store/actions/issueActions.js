//import axiosWithAuth from 'comake\src\utils\axiosWithAuth.js'
import axios from 'axios'
import {useHistory} from 'react-router-dom'

export const FETCH_ISSUES = "FETCH_ISSUES"
export const FETCH_ISSUES_SUCCESS = "FETCH_ISSUES_SUCCESS"
export const LOG_OUT = "LOG_OUT"



//action creators
export const fetchIssues = () => {
    return(dispatch) => {
        dispatch({
            type: FETCH_ISSUES
        })
        axios
            .get("https://bw-comakeapp-java.herokuapp.com/issues/issues")
            .then((response) => {
                console.log("Get Response", response)
                dispatch({type: FETCH_ISSUES_SUCCESS, payload: response.data})
            })
        
    }
}

export const logOut = () => {
    return(dispatch) => {
        const history = useHistory()
    localStorage.removeItem('token')
    history.push('/login')
    dispatch({
        type: LOG_OUT
    })
}
}