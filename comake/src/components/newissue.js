import React from 'react'
import {connect} from 'react-redux'

export function Issues(){
    return(
        <div>From the Issues page</div>
    )
} 
    


const mapStateToProps = state => {
    return {
        issues: state.issues,
    }
}

export default connect(
    mapStateToProps,
    {}
) (Issues)