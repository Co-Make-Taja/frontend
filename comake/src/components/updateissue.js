import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {useHistory, useParams} from 'react-router-dom'

import {Issues} from './issue'

const initialIssue = {
    //issueid: "",
    title: "Issue title",
    description: "Having an issue",
    image: "Image url here",
    categoryid: "",
    //user: {},
    //comments: []
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
        .get(`https://bw-comakeapp-java.herokuapp.com/issues/issue/${params.id}`)
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
        .put(`https://bw-comakeapp-java.herokuapp.com/issues/issue/${id}`, someIssue)
        .then(res => {
            console.log(res, "Put request to update issue")
            //setSomeIssue(initialIssue)
            history.push(`/dashboard/${id}`)
        })
})
const handleDropdown = event => {
    setSomeIssue({
      ...someIssue,
        category: event.target.value
    });
  };

  const cancelButton = e => {
    history.push('/dashboard')
}

return ( 
    <div className ="nDashboardContainers">
    <form>
        <input className = "nFormInputs"
        type = 'text'
        name = 'title'
        onChange = {handleChanges}
        value = {someIssue.title}
        placeholder = "Issue Titles"
        />
<br></br>
        {/* <input
        type = 'text'
        name = 'description'
        onChange = {handleChanges}
        value = {someIssue.description}
        placeholder = "Issue Description"
        /> */}
        <textarea 
                type = 'text'
                name= "description" 
                rows= "3"
                
                cols = "50"
                value = {someIssue.description}
                onChange = {handleChanges}
                placeholder = 'Description of Issue'
                ></textarea>
<br></br>
        <input
        type = 'url'
        name = 'image'
        onChange = {handleChanges}
        value = {someIssue.image}
        placeholder = "Image of issue"
        />

                
        <br></br>
        <label htmlFor="Category">  </label>
                <select value = {someIssue.categoryid} onChange = {handleDropdown}>
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

        {/* <input
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
        <br></br> */}

        <button onClick = {submitChange}>Submit</button>
        <button onClick = {cancelButton}>Cancel</button>
        
    </form>
    </div>
)
}