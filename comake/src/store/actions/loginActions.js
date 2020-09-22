//import axiosWithAuth from 'comake\src\utils\axiosWithAuth.js'
import axios from 'axios'

export const POST_LOGIN = "POST_LOGIN"

//action creators
export const postLogin = () => {
    return(dispatch) => {
        dispatch({
            type: POST_LOGIN
        })
        //axios here
        
    }
}