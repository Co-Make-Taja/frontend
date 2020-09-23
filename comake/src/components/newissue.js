import React, { useState } from 'react'
import axios from 'axios'
import {useHistory, useParams} from 'react-router-dom'




export const NewIssue = () => {
const history = useHistory()
const params = useParams();
const id = params.id

const initialValues = {
    //issueid: "",
    title: "",
    description: "",
    image: "",
    categoryid: "",
   // user: {},
    //comments: []

}
const [newIssue, setNewIssue] = useState(initialValues)

    const handleChanges = e => {
        e.preventDefault()
        setNewIssue({
            ...newIssue,
                [e.target.name]: e.target.value
        })
    }

    const handleDropdown = event => {
        setNewIssue({
          ...newIssue,
            categoryid: event.target.value
        });
      };

    const submitIssue = (e) => {
        e.preventDefault()
        axios
            .post(`https://bw-comakeapp-java.herokuapp.com/issues/issue`, newIssue)
            .then((res) => {
                console.log("New Issue created", res)
                setNewIssue(initialValues)
                history.push(`/dashboard`) //redirects to page with newly updated movie
            })
            .catch(err => {
                console.log(err)
            })
    }

    const cancelButton = e => {
        history.push('/dashboard')
    }
    

    return(
        <div>
            <h1>This here is a new issue</h1>
            <form>
                <input
                type = 'text'
                name = "title"
                onChange = {handleChanges}
                value = {newIssue.title}
                placeholder= "Title of Issue"
                >
                </input>
                {/* <br></br>

                <input
                type = 'text'
                name = "description"
                onChange = {handleChanges}
                value = {newIssue.description}
                placeholder = "Description of Issue"   
                >      
                </input> */}
                <br></br>
                
                <textarea 
                type = 'text'
                name= "description" 
                rows= "3"
                
                cols = "50"
                value = {newIssue.description}
                onChange = {handleChanges}
                placeholder = 'Description of Issue'
                >
                
                </textarea>
                
                <br></br>

                <input
                type = 'url'
                name = "image"
                onChange = {handleChanges}
                value = {newIssue.image}
                placeholder = "Upload an image"
                
                >
                </input>
                <br></br>
                <label htmlFor="Category">  </label>
                <select value = {newIssue.categoryid} onChange = {handleDropdown}>
                <option value={1}>Announcement</option>
                <option value={2}>Community Activities</option>
                <option value={3}>Crime & Safety</option>
                <option value={4}>Flooding</option>
                <option value={5}>General</option>
                <option value={6}>Holiday</option>
                <option value={7}>Lost & Found</option>
                <option value={8}>Pets</option>
                <option value={9}>Recommendation</option>
                <option value={10}>Road Closure & Transportation</option>
                <option value={11}>School & Education</option>
                <option value={12}>Utilities</option>
                <option value={13}>Yard and Lawn</option>
                </select>                
                <br></br>

                {/* <input
                type = 'text'
                name = "user"
                onChange = {handleChanges}
                value = {newIssue.user}
                placeholder = "User"
                >
                </input>
                <br></br> */}

                {/* <input
                type = 'text'
                name = "comments"
                onChange = {handleChanges}
                value = {newIssue.comments}
                placeholder = "Comments"
                >
                </input> */}
                <br></br>
                <button onClick = {submitIssue}>Submit</button>
                <button onClick = {cancelButton}>Cancel</button>
            </form>
        </div>
    )
}
