import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {useHistory, useParams} from 'react-router-dom'
import {Link} from "react-router-dom"

export const AddComment = () => {
const history = useHistory()
const params = useParams();
const {id} = useParams()


const initialValues = {
    
        //commentid: 27,
        comment: "This is a sample comment.",
        // user: {
        //     userid: 23,
        //     username: "taja",
        //     phone: "(123)456-7777",
        //     primaryemail: "taja@lambda.com"
        // }

}
///////////////////////////////////////////////////
const getComments = (id) => { //get all comments for this ID
    axios
        //.get(`https://bw-comakeapp-java.herokuapp.com/issues/issues/${id}`)
        .get(`https://bw-comakeapp-java.herokuapp.com/issues/issue/${params.id}/comments`)
        .then(res => {
            console.log("Getting all comments", res)
            setComments(res.data)
            
        })
        .catch(err => {console.log(err)})
}
useEffect(() => { //get all comments on load
    getComments(params.id)
    console.log("This is params", params)

},[params.id])
//////////////////////////////////////////////////////
const [comment, setComment] = useState(initialValues)
const [comments, setComments] = useState([]) //used for comment map
//////////////////////////////////////////////////////

const handleChanges = e => {
    e.preventDefault()
    setComment({
        ...comment,
            [e.target.name]: e.target.value
    })
}
const submitComment = (e) => {
    e.preventDefault()
    axios
        .post(`https://bw-comakeapp-java.herokuapp.com/comments/comment`, comment)
        .then((res) => {
            console.log("New comment created", res)
            setComment(initialValues)
            history.push(`/dashboard`) //redirects to page with newly updated movie
        })
        .catch(err => {
            console.log(err)
        })
}
const cancelButton = e => {
    history.push('/dashboard')
}
///////////////////////////////////////////////////////////
return(
    <div className = "nDashboardContainers">
        {             
            //--------------------------------------------------------------------            
            comments.map(comment => {
    
                const deleteButton = e => {
                    e.preventDefault()
                    axios
                        
                        .delete(`https://bw-comakeapp-java.herokuapp.com/comments/comment/${comment.id}`)
                        .then(response => {
                            console.log("Comment deleted", response)
                            
                            alert(`Comment: ${comment.id} has been deleted`)
                            history.push('/dashboard')
                        })
                        //.finally(() => {history.push('/dashboard')})
                }
                //--------------------------------------------------------------------
                return(
                    <div className="nDashboardDivs">
                        {}
                        
                        <h3>{comment.user.username}: {comment.comment}</h3>
                        <button onClick = {deleteButton}>Delete</button>
                        
                        
                    </div>
                )
            })
        }



<div>
    <textarea 
    type = 'text'
    name= "comment" 
    rows= "3"
    
    cols = "50"
    value = {comment.comment}
    onChange = {handleChanges}
    placeholder = 'Comment'
    >
    </textarea>
    <button onClick = {submitComment}>Submit</button>
    <button onClick = {cancelButton}>Cancel</button>
</div>
        
    </div>
)

}