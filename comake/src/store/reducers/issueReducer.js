
const initialIssues = {
    issues: []
}

export const issueReducer = (state = initialIssues, action) => {
    switch (action.type){
        case FETCH_ISSUES:
            return{
                ...state,
            }
    }
}