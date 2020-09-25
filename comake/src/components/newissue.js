import React, { useState } from 'react'
import axios from 'axios'
import {useHistory, useParams} from 'react-router-dom'
import {axiosWithAuth} from '../utils/axiosWithAuth'





export const NewIssue = () => {
const history = useHistory()
const params = useParams();
const id = params.id

// const initialValues = {
//     //issueid: "",
//     title: "",
//     description: "",
//     image: "",
//     categoryid: "",
//    // user: {},
//     //comments: []

// }
const initialValues = {
    //issueid: "",
    title: "",
    description: "",
    image: "",
    category: {categoryid: "" }
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

    // const handleDropdown = event => {
    //     setNewIssue({
    //       ...newIssue,
    //         categoryid: event.target.value
    //     });
    //   };
    const handleDropdown = event => {
        setNewIssue({          
        ...newIssue,
            category: {categoryid: event.target.value}
            //category: event.target.value
        });
      };

    const submitIssue = (e) => {
        e.preventDefault()
        //axios
        axiosWithAuth()
           // .post(`https://bw-comakeapp-java.herokuapp.com/issues/issue`, newIssue)
           .post(`/issues/issue`, newIssue)
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
        <div className = "nDashboardContainers">
            
            <form>
                {/* <label for = "title">Post Title:</label> */}
                <input className = "nFormInputs"
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
                placeholder = "Image url"                
                >
                </input>

                <br></br>
                {/* <label htmlFor="Category"> Post Type: </label>
                <select value = {newIssue.categoryid} onChange = {handleDropdown}>
                <option value={4}>Announcement</option>
                <option value={5}>Community Activities</option>
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
                </select>                 */}
                <br></br>

                <br></br>
                <label htmlFor="Category"> Post Type: </label>
                <select value = {newIssue.category.categoryid} onChange = {handleDropdown}>
                <option value={4}>Announcement</option>
                <option value={5}>Community Activities</option>
                <option value={6}>Crime & Safety</option>
                <option value={7}>Flooding</option>
                <option value={8}>General</option>
                <option value={9}>Holiday</option>
                <option value={10}>Lost & Found</option>
                <option value={11}>Pets</option>
                <option value={12}>Recommendation</option>
                <option value={13}>Road Closure & Transportation</option>
                <option value={14}>School & Education</option>
                <option value={15}>Utilities</option>
                <option value={16}>Yard and Lawn</option>
                </select>                
                <br></br>
                <br></br>
                <button onClick = {submitIssue}>Submit</button>
                <button onClick = {cancelButton}>Cancel</button>
            </form>
        </div>
    )
}
