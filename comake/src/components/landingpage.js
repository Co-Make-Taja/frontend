import React, { useEffect, useState } from 'react'
import {fetchIssues, FETCH_ISSUES_SUCCESS} from '../store/actions/issueActions'
import {connect} from 'react-redux' 
import {Issues} from './issue'
import {Link} from 'react-router-dom'
import {useHistory} from 'react-router-dom'
import { useParams } from "react-router-dom";
import axios from 'axios'
import { axiosWithAuth } from '../store/axiosWithAuth'



//function LandingPage ({fetchIssues, data}, props) {
//function LandingPage ({fetchIssues}, props) {
//function LandingPage ({fetchIssues},{issues} ) {
function LandingPage ({fetchIssues, issues}) {
//function LandingPage ({fetchIssues, issues}) {

//--------------------------------Page reload state---
const [issueDeleted, setIssueDeleted] = useState(false)

    

//------------------------------------get request
    useEffect(() =>{
        fetchIssues();
    }, [fetchIssues])
//------------------------------------get request

//-----------------------------------------------------------------
    const history = useHistory()
    const {id} = useParams()
///////////////////////////////////////UPVOTES////////////////////
    //const [upVotes, setUpVotes] = useState({upvote: ""})

//-----------------------------------------------------------------



//comment this out once map is working------------------------------
//const id = "id"    
//const checkIssues = () => {console.log(props)}

//used for testing purposes-----------------------------------------
const goGetIssues = () => {
    
    axios
    .get ("https://bw-comakeapp-java.herokuapp.com/issues/issues")
    .then ((response) => {
        console.log(response.data)
        //setPropsTest(response.data)
   
        

    } )}
//------------------------------------------------------------------

const newIssue = () => {
    
    history.push("/new-issue")
}

const updateButton = (e) => {
    e.preventDefault()
    console.log()
    history.push(`/dashboard/ticket/update/${id}`)
  }

//   const deleteButton = e => {
//     e.preventDefault()
//     axios
//         //.post(`https://bw-comakeapp-java.herokuapp.com/issues/issues/${id}`)
//         .post(`https://bw-comakeapp-java.herokuapp.com/issues/issues/${issue.issueid}`)
//         .then(response => {
//             console.log("Issue deleted", response)
//             alert("Issue deleted")
//             history.push('/dashboard')
//         })
// }
//-------------------------------------------------------------
return(
    <div className = "nDashboardContainers">
        
        <div className = 'nDashboardButtonDiv' onClick = {newIssue}>        
        {/* <button onClick = {newIssue} className = "form button">New Issue</button> */}
        <p onClick = {newIssue} className = "nDashboardP">Post A New Issue</p>
        </div>
        
        {             
            //--------------------------------------------------------------------            
            issues.map(issue => {
                    
                const deleteButton = e => {
                    e.preventDefault()
                    axiosWithAuth()
                        //.post(`https://bw-comakeapp-java.herokuapp.com/issues/issues/${id}`)
                        .delete(`https://bw-comakeapp-java.herokuapp.com/issues/issue/${issue.issueid}`)
                        .then(response => {
                            console.log("Issue deleted", response)
                            setIssueDeleted(!issueDeleted)
                            alert(`Issue: ${issue.title} has been deleted`)
                            history.push('/dashboard')
                            window.location.reload()
                        })
                        //.finally(() => {history.push('/dashboard')})
                }

                // const updateUpvotes = () => {
                //     axiosWithAuth()

                //     .patch(`/issues/issue/${issue.issueid}/upvote`, {upvote: upvoteCount})
                //     console.log (issue.upvote)                   

                //     }
                    
                        // localStorage.setItem(`upvotes ${issue.issueid}`, "")

                        // function increaseUpvote(){
                        //     let upVoteCount = localStorage.getItem(`upvotes ${issue.issueid}`)
                        //     localStorage.setItem(upVoteCount, upVoteCount++)
                        // }
    
                        
                
                
                //--------------------------------------------------------------------
                return(
                    <div className="nDashboardDivs">
                        {/* {} */}
                        
                        <h3 className="nTitles">{issue.title}</h3>
                        <h2><img src = {issue.image} width = "250" height = "250"></img></h2>
                        <h4 className = "nDescriptions">{issue.description}</h4>
                        <h4>{issue.comments}</h4>
                        <Link key = {issue.id} to ={`/add-comment/${issue.issueid}`}><button>Comment</button></Link>
                        <Link key = {issue.id} to = {`/update-issue/${issue.issueid}`}><button>Update</button></Link>
                        <button onClick = {deleteButton}>Delete</button>
                        <br></br>
                        <button >Upvote</button>
                        <h4>Upvotes: {issue.upvote}</h4>
                        
                        
                    </div>
                )
            })
        }

        
        
        {/* {issues.map((issue) => (
              <Issues key = {issue.id} issue = {issue} /> 
            // <Link key={issue.id} to={`/issue/${issue.id}`}>
            // <Issues issue={issue} />
            // </Link>
                
        ))
        }  */}


    </div>
)
}

const mapStateToProps = (state) => {
    return {
        issues: state.issues
    }
}

export default connect(mapStateToProps, {fetchIssues}) (LandingPage)