//import axiosWithAuth from 'comake\src\utils\axiosWithAuth.js'
import axios from 'axios'
import {useHistory} from 'react-router-dom'
import {axiosWithAuth} from "../axiosWithAuth"

export const FETCH_ISSUES = "FETCH_ISSUES"
export const FETCH_ISSUES_SUCCESS = "FETCH_ISSUES_SUCCESS"
export const LOG_OUT = "LOG_OUT"
//import {axiosWithAuth} from "../axiosWithAuth"


//action creators
export const fetchIssues = () => {
    return(dispatch) => {
        dispatch({
            type: FETCH_ISSUES
        })
        //axios
        axiosWithAuth()
            .get("https://bw-comakeapp-java.herokuapp.com/issues/issues")
            .then((response) => {
                console.log("Get Response", response.data)
                dispatch({type: FETCH_ISSUES_SUCCESS, payload: response.data})
            })
            .catch(err => {console.log(err)})
        
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