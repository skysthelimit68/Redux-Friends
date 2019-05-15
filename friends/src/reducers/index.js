import { LOGIN_START, LOGIN_SUCCESS, LOGIN_FAILURE } from "../actions";


const initialState = {
    friends : [],
    error : ""
}

const reducer = (state = initialState, action) => {
    console.log(action.type)
    switch(action.type) {
        case LOGIN_START:
            console.log("login starting")
            return state;
            
        case LOGIN_SUCCESS:
            return {
                ...state,
                friends : action.payload,
                error : ""
            }

        case LOGIN_FAILURE:
            return {
                ...state,
                error : action.payload,
            }

        default:
            return state;
    }
}

export default reducer;