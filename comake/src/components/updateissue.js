import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {useHistory, useParams} from 'react-router-dom'

import {Issues} from './issue'

const initialIssue = {
    issueid: "",
    title: "Issue title",
    description: "Having an issue",
    image: "Image url here",
    category: {},
    user: {},
    comments: []
}

export const UpdateIssue = (props) => {
    const history = useHistory()
    //const id = useParams()
    
    const params = useParams();
    //const id = params.id
    const {id} = useParams()

    const [someIssue, setSomeIssue] = useState(initialIssue)


const handleChanges = e => {
    e.preventDefault()
    setSomeIssue({
        ...someIssue,
            [e.target.name]: e.target.value
    })
}

const getIssue = (id) => {
    axios
        //.get(`https://bw-comakeapp-java.herokuapp.com/issues/issues/${id}`)
        .get(`https://bw-comakeapp-java.herokuapp.com/issues/issues/${params.id}`)
        .then(res => {
            console.log(res, "Getting specific issue")
            setSomeIssue(res.data)
            console.log(res.data)
        })
        .catch(err => {console.log(err)})
}


useEffect(() => {
    getIssue(params.id)
    console.log("This is params", params)

},[params.id])

const submitChange = (e => {
    e.preventDefault()
    axios
        .put(`https://bw-comakeapp-java.herokuapp.com/issues/issues/${id}`)
        .then(res => {
            console.log(res, "Put request to update issue")
            setSomeIssue(initialIssue)
            history.push(`/dashboard/${id}`)
        })
})
const handleDropdown = event => {
    setSomeIssue({
      ...someIssue,
        category: event.target.value
    });
  };

return ( 
    <form onSubmit = {submitChange}>
        <input
        type = 'text'
        name = 'title'
        onChange = {handleChanges}
        value = {someIssue.title}
        placeholder = "Issue Titles"
        />

        <input
        type = 'text'
        name = 'description'
        onChange = {handleChanges}
        value = {someIssue.description}
        placeholder = "Issue Description"
        />

        <input
        type = 'url'
        name = 'image'
        onChange = {handleChanges}
        value = {someIssue.image}
        placeholder = "Image of issue"
        />

                
        <br></br>
        <label htmlFor="Category">Category:  </label>
        <select value = {someIssue.category} onChange = {handleDropdown} >
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
        value = {someIssue.user}
        placeholder = "User"
        >
        </input>
        <br></br>

        <input
        type = 'text'
        name = "comments"
        onChange = {handleChanges}
        value = {someIssue.comments}
        placeholder = "Comments"
        >
        </input>
        <br></br>

        <button>Submit</button>
    </form>
)
}