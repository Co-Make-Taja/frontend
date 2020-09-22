//import axiosWithAuth from 'comake\src\utils\axiosWithAuth.js'
import axios from 'axios'

export const FETCH_ISSUES = "FETCH_ISSUES"
export const FETCH_ISSUES_SUCCESS = "FETCH_ISSUES_SUCCESS"

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