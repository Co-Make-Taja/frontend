import React, { useEffect, useState } from 'react'
import {fetchIssues, FETCH_ISSUES_SUCCESS} from '../store/actions/issueActions'
import {connect} from 'react-redux' 
import {Issues} from './issue'
import {Link} from 'react-router-dom'
import {useHistory} from 'react-router-dom'
import axios from 'axios'



//function LandingPage ({fetchIssues, data}, props) {
//function LandingPage ({fetchIssues}, props) {
//function LandingPage ({fetchIssues},{issues} ) {
function LandingPage ({fetchIssues, issues}) {
//function LandingPage ({fetchIssues, issues}) {


    

    //get request
    useEffect(() =>{
        fetchIssues();
    }, [fetchIssues])


    const history = useHistory()

//comment this out once map is working------------------------------
//const id = "id"    
//const checkIssues = () => {console.log(props)}
const goGetIssues = () => {
    
    axios
    .get ("https://bw-comakeapp-java.herokuapp.com/issues/issues")
    .then ((response) => {
        console.log(response.data)
        //setPropsTest(response.data)
   
        

    } )}
//------------------------------------------------------------------

const newIssue = () => {
    history.push('/newissue')
}
//-------------------------------------------------------------
return(
    <div>
        From the LandingPage
        <button>Logout</button>
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
                        {issue.title}
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