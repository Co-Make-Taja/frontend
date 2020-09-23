import React, { useState } from 'react'
import axios from 'axios'
import {useHistory, useParams} from 'react-router-dom'




export const NewIssue = () => {
const history = useHistory()
const params = useParams();
const id = params.id

const initialValues = {
    issueid: "",
    title: "",
    description: "",
    image: "",
    category: {},
    user: {},
    comments: []

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
            category: event.target.value
        });
      };

    const submitIssue = (e) => {
        e.preventDefault()
        axios
            .post(`https://bw-comakeapp-java.herokuapp.com/issues/issue`, newIssue)
            .then((res) => {
                console.log("New Issue created", res)
                setNewIssue(initialValues)
                //history.push(`/movies/${id}`) //redirects to page with newly updated movie
            })
            .catch(err => {
                console.log(err)
            })
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
                <br></br>

                <input
                type = 'text'
                name = "description"
                onChange = {handleChanges}
                value = {newIssue.description}
                placeholder = "Description of Issue"
                >
                </input>
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
                <label htmlFor="Category">Category:  </label>
                <select value = {newIssue.category} onChange = {handleDropdown} >
                <option value="Red">Red</option>
                <option value="Green">Green</option>
                <option value="Blue">Blue</option>
                <option value="Orange">Orange</option>
                </select>                
                <br></br>

                <input
                type = 'text'
                name = "user"
                onChange = {handleChanges}
                value = {newIssue.user}
                placeholder = "User"
                >
                </input>
                <br></br>

                <input
                type = 'text'
                name = "comments"
                onChange = {handleChanges}
                value = {newIssue.comments}
                placeholder = "Comments"
                >
                </input>
                <br></br>
                <button onClick = {submitIssue}>Submit</button>
            </form>
        </div>
    )
}
