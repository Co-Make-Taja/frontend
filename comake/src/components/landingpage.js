import React, { useEffect } from 'react'
import {fetchIssues} from '../store/actions/issueActions'
import {connect} from 'react-redux' 


function LandingPage ({fetchIssues}) {
    
    useEffect(() =>{
        fetchIssues();
    }, [fetchIssues])

return(
    <div>Landing Page Test Div</div>
)
}

const mapStateToProps = state => {
    return {
        issues: state.issues,
    }
}

export default connect(
    mapStateToProps,
    {fetchIssues}
) (LandingPage)