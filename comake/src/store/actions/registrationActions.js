//import axiosWithAuth from 'comake\src\utils\axiosWithAuth.js'
import axios from 'axios'

export const POST_REGISTRATION = "POST_REGISTRATION"

//action creators
export const fetchIssues = () => {
    return(dispatch) => {
        dispatch({
            type: POST_REGISTRATION
        })
        //axios here
        
    }
}