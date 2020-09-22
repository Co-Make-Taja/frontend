import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {useHistory, useParams} from 'react-router-dom'

import {Issues} from './newissue'

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
    const id = useParams()
    const [someIssue, setSomeIssue] = useState(initialIssue)


const handleChanges = e => {
    e.preventDefault()
    setSomeIssue({
        ...someIssue,
            [e.target.name]: e.target.value
    })
}
//componentDidMount()
useEffect(() => {
    axios
        .get(`https://bw-comakeapp-java.herokuapp.com/issues/issue/${id}`)
        .then(res => {
            console.log(res, "Getting specific issue")
            setSomeIssue(res.data)
        })
},[id])

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
        type = 'text'
        name = 'title'
        onChange = {handleChanges}
        value = {someIssue.title}
        placeholder = "Issue Titles"
        />

        <input
        type = 'text'
        name = 'image'
        onChange = {handleChanges}
        value = {someIssue.image}
        placeholder = "Image of issue"
        />
        <button>Submit</button>
    </form>
)
}