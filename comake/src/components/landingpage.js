import React, { useEffect } from 'react'
import {fetchIssues} from '../store/actions/issueActions'
import {connect} from 'react-redux' 
import {Issues} from './newissue'



function LandingPage ({fetchIssues}, props) {
    
    useEffect(() =>{
        fetchIssues();
    }, [fetchIssues])

return(
    <div>
        <p>From the LandingPage</p>
        <Issues />
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