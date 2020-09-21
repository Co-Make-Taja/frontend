const initialRegister = {
    registerUser: []
}

export const registrationReducer = (state = initialRegister, action) => {
    switch (action.type){
        case SEND_REGISTRATION:
            return{
                ...state,
            }
    }
}