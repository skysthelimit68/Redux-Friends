import axios from 'axios';

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
                dispatch({ type: LOGIN_FAILURE, payload: err })
            })
    )
}

/*const request = axios.get('http://localhost:5000/api/friends', {
    headers: {
        "authorization": window.localStorage.getItem('auth')
    }})*/

export const getFriends = () => dispatch => {
    console.log("getting it")

    dispatch({ type: GET_FRIENDS_START });
    axios
        .get('http://localhost:5000/api/friends', {
            headers: {
                "authorization": window.localStorage.getItem('token')
            }})
        .then(res => {
            dispatch({ type: GET_FRIENDS_SUCCESS, payload: res.data })
        })
        .catch(err => {
            dispatch({ type: GET_FRIENDS_FAILURE, payload: err })
        })
}
