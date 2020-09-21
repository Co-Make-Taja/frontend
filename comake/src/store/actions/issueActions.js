//import axiosWithAuth from 'comake\src\utils\axiosWithAuth.js'
import axios from 'axios'

export const FETCH_ISSUES = "FETCH_ISSUES"

//action creators
export const fetchIssues = () => {
    return(dispatch) => {
        dispatch({
            type: FETCH_ISSUES
        })
        //axios here
        
    }
}