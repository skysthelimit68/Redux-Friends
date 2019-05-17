import axios from 'axios';
import { axiosWithAuth} from "../axiosWithAuth";

export const LOGIN_START = "LOGIN_START";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";
export const GET_FRIENDS_START = "GET_FRIENDS";
export const GET_FRIENDS_FAILURE = "GET_FRIENDS_FAILURE";
export const GET_FRIENDS_SUCCESS = "GET_FRIENDS_SUCCESS";

export const login = userInfo => dispatch => {
    dispatch({ type: LOGIN_START });
    return (
        axios
            .post('http://localhost:5000/api/login', userInfo)
            .then(res => {
                console.log(res)
                localStorage.setItem("token", res.data.payload)
                dispatch({ type: LOGIN_SUCCESS, payload: res.data.payload })
            })
            .catch(err => {
                console.log(err)
                dispatch({ type: LOGIN_FAILURE, payload: err })
            })
    )
}

export const getFriends = () => dispatch => {
    dispatch({ type: GET_FRIENDS_START });

        axiosWithAuth().get('http://localhost:5000/api/friends')
        .then(res => {
            console.log(res)
            dispatch({ type: GET_FRIENDS_SUCCESS, payload: res.data })
        })
        .catch(err => {
            console.log(err)
            dispatch({ type: GET_FRIENDS_FAILURE, payload: err })
        })

    
}

export const ADD_FRIEND_START = "ADD_FRIEND_START";
export const ADD_FRIEND_SUCCESS = "ADD_FRIEND_SUCCESS";
export const ADD_FRIEND_FAILURE = "ADD_FRIEND_FAILURE";

export const addFriend = newFriend => dispatch => {
    dispatch({ type : ADD_FRIEND_START })
    return (
        axiosWithAuth().post('http://localhost:5000/api/friends', newFriend)
        .then(res => {
            console.log(res)
            dispatch({ type : ADD_FRIEND_SUCCESS, payload: res.data })
        })
        .catch(err => {
            console.log(err)
            dispatch({ type: ADD_FRIEND_FAILURE, payload:err})
        })
    )
}

export const UPDATE_FRIEND_START = "UPDATE_FRIEND_START";
export const UPDATE_FRIEND_SUCCESS = "UPDATE_FRIEND_SUCCESS";
export const UPDATE_FRIEND_FAILURE = "UPDATE_FRIEND_FAILURE";

export const updateFriend = friend => dispatch => {
    dispatch({type: UPDATE_FRIEND_START})
    return (
        axiosWithAuth().put(`http://localhost:5000/api/friends/${friend.id}`, friend)
        .then(res => {
            console.log(res)
            dispatch({ type : UPDATE_FRIEND_SUCCESS, payload: res.data })
        })
        .catch(err => {
            console.log(err)
            dispatch({ type: UPDATE_FRIEND_FAILURE, payload:err})
        })
    )
}


export const DELETE_FRIEND_START = "DELETE_FRIEND_START";
export const DELETE_FRIEND_SUCCESS = "DELETE_FRIEND_SUCCESS";
export const DELETE_FRIEND_FAILURE = "DELETE_FRIEND_FAILURE";

export const deleteFriend = id => dispatch => {
    dispatch ({type: DELETE_FRIEND_START})
    return (
        axiosWithAuth().delete(`http://localhost:5000/api/friends/${id}`)
        .then(res => {
            console.log(res)
            dispatch({ type : DELETE_FRIEND_SUCCESS, payload: res })
        })
        .catch(err => {
            console.log(err)
            dispatch({ type: DELETE_FRIEND_FAILURE, payload:err})
        })
    )
}