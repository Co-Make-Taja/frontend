import React from 'react'
import {connect} from 'react-redux'
import axios from 'axios'
import { useParams } from "react-router-dom";
import {useHistory} from 'react-router-dom'



export function Issues(props){

    const history = useHistory()
    const {id} = useParams()

    const updateButton = (e) => {
        e.preventDefault()
        console.log()
        history.push(`/dashboard/ticket/update/${id}`)
      }

    const deleteButton = e => {
        e.preventDefault()
        axios
            .post(`https://bw-comakeapp-java.herokuapp.com/issues/issues/${id}`)
            .then(response => {
                console.log("Issue deleted", response)
                alert("Issue deleted")
                history.push('/dashboard')
            })
    }

    return(
        <div><p>I am a mapped issue: {props.issue} </p>
            
            <button onClick = {updateButton}>Update Issue</button>
            <button onClick = {deleteButton}>Delete Issue</button>
        </div>
        
    )
} 
    


const mapStateToProps = state => {
    return {
        issues: state.issues,
    }
}

export default connect(
    mapStateToProps,
    {}
) (Issues)