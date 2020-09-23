import React, { useEffect, useState } from 'react'
import {fetchIssues, FETCH_ISSUES_SUCCESS} from '../store/actions/issueActions'
import {connect} from 'react-redux' 
import {Issues} from './issue'
import {Link} from 'react-router-dom'
import {useHistory} from 'react-router-dom'
import { useParams } from "react-router-dom";
import axios from 'axios'



//function LandingPage ({fetchIssues, data}, props) {
//function LandingPage ({fetchIssues}, props) {
//function LandingPage ({fetchIssues},{issues} ) {
function LandingPage ({fetchIssues, issues}) {
//function LandingPage ({fetchIssues, issues}) {


    

//------------------------------------get request
    useEffect(() =>{
        fetchIssues();
    }, [fetchIssues])
//------------------------------------get request

//-----------------------------------------------------------------
    const history = useHistory()
    const {id} = useParams()
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
//-------------------------------------------------------------
return(
    <div>
        <h2>From the LandingPage</h2>
        <button>Logout</button>
        <button onClick = {newIssue}>New Issue</button>
        {/* <button onClick = {newIssue}>Post a new issue</button> */}
        
        {/* <button onClick = {checkIssues} >Check issues</button> */}
        {/* <button onClick = {goGetIssues}>Check Fetch response</button> */}
    {/* {     console.log("Props test",propsTest)} */}
        {/* <Issues id = {id}/> */}

        {
             
            // console.log("Test console log", issues)
            issues.map(issue => {
                return(
                    <div>
                        
                        <h3>{issue.title}</h3>
                        <button onClick = {updateButton}>Update</button>
                        <button onClick = {deleteButton}>Delete</button>
                        <Link key = {issue.id} to = {`/update-issue/${issue.issueid}`}>Test</Link>
                        
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