import React, { useEffect } from 'react'
import {fetchIssues} from '../store/actions/issueActions'
import {connect} from 'react-redux' 
import {Issues} from './newissue'



function LandingPage ({fetchIssues}, props) {
    
    useEffect(() =>{
        fetchIssues();
    }, [fetchIssues])

//comment this out once map is working
const id = "id"    

return(
    <div>
        From the LandingPage
        <button>Logout</button>
        <button>Post a new issue</button>
        <Issues id = {id}/>
        {/* <Issues />
        {props.issues.map((issue) => (
             <Issues key = {issue.id} issue = {issue}/> 
                
        ))
} */}


    </div>
)
}

const mapStateToProps = state => {
    return {
        issues: state.issues
    }
}

export default connect(
    mapStateToProps,
    {fetchIssues}
) (LandingPage)