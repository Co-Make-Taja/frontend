//import axiosWithAuth from 'comake\src\utils\axiosWithAuth.js'
import axios from 'axios'

export const FETCH_ISSUES = "FETCH_ISSUES"

//action creators
export const fetchIssues = () => {
    return(dispatch) => {
        dispatch({
            type: FETCH_ISSUES
        })
        axios
            .get("https://bw-comakeapp-java.herokuapp.com/comments")
            .then((response) => {
                console.log("Get Response", response)
                dispatch({type: FETCH_ISSUES, payload: response.data})
            })
        
    }
}