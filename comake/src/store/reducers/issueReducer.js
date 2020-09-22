import {FETCH_ISSUES, FETCH_ISSUES_SUCCESS} from '../actions/issueActions'

const initialIssues = {
    issues: [
        // {
        //     issueid: "",
        //     title: "Issue title",
        //     description: "Having an issue",
        //     image: "Image url here",
        //     category: {},
        //     user: {},
        //     comments: []
        // }
    ]
}

export const issueReducer = (state = initialIssues, action) => {
    switch (action.type){
        case FETCH_ISSUES:
            return{
                ...state,
                
            }
        case FETCH_ISSUES_SUCCESS:
            return{
                ...state,
                issues: action.payload
            }
        default:
            return state;
    }
}