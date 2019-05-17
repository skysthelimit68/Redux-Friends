import { LOGIN_START, LOGIN_SUCCESS, LOGIN_FAILURE, GET_FRIENDS_SUCCESS, GET_FRIENDS_START, GET_FRIENDS_FAILURE,
 ADD_FRIEND_START, ADD_FRIEND_SUCCESS, ADD_FRIEND_FAILURE, UPDATE_FRIEND_START, UPDATE_FRIEND_SUCCESS, UPDATE_FRIEND_FAILURE } from "../actions";


const initialState = {
    friends : [],
    error : "", 
    token : "",
    retrivingFriends : false,
    addingFriend : false,
    updatingFriend: false,
}

const reducer = (state = initialState, action) => {
    console.log(action.type)
    switch(action.type) {
        case LOGIN_START:
            console.log("login starting")
            return {
                ...state,
                error: ""
            };
            
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
                retrivingFriends : true,
                error: ""
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
            
        case ADD_FRIEND_START:
            return {
                ...state,
                addingFriend : true,
                error: ""
            }
        case ADD_FRIEND_SUCCESS:
            console.log(action.payload)
            return {
                ...state,
                addingFriend : false,
                friends : action.payload
            }
        case ADD_FRIEND_FAILURE: 
            return {
                ...state,
                addingFriend : false,
                error: action.payload
            }
        case UPDATE_FRIEND_START:
            return {
                ...state,
                updatingFriend : true,
                error: ""
            }
        case UPDATE_FRIEND_SUCCESS:
            console.log(action.payload)
            return {
                ...state,
                updatingFriend : false,
                friends : action.payload
            }
        case UPDATE_FRIEND_FAILURE: 
            return {
                ...state,
                updatingFriend : false,
                error: action.payload
            }
        default:
            return state;
    }
}

export default reducer;