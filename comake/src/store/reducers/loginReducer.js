const initialLogin = {
    loginUser: []
}

export const loginReducer = (state = initialLogin, action) => {
    switch (action.type){
        case SEND_LOGIN:
            return{
                ...state,
            }
    }
}