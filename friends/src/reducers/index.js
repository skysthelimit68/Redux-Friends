import { LOGIN_START, LOGIN_SUCCESS, LOGIN_FAILURE, GET_FRIENDS_SUCCESS, GET_FRIENDS_START, GET_FRIENDS_FAILURE } from "../actions";


const initialState = {
    friends : [],
    error : "", 
    token : "",
    retrivingFriends : false,
}

const reducer = (state = initialState, action) => {
    console.log(action.type)
    switch(action.type) {
        case LOGIN_START:
            console.log("login starting")
            return state;
            
        case LOGIN_SUCCESS:
            console.log(action.payload)
            return {
                ...state,
                token : action.payload,
                error : ""
            }

        case LOGIN_FAILURE:
            return {
                ...state,
                error : action.payload,
            }

        case GET_FRIENDS_START:

            return {
                ...state,
                retrivingFriends : true
            }

        case GET_FRIENDS_SUCCESS:
            console.log(action.payload)
            return {
                ...state,
                retrivingFriends : false,
                friends : action.payload
            }

        case GET_FRIENDS_FAILURE:
            return {
                ...state,
                retrivingFriends : false,
                error : action.payload
            }    
            
        default:
            return state;
    }
}

export default reducer;