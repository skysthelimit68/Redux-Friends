import axios from 'axios';

export const LOGIN_START = "LOGIN_START";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";

export const login = userInfo => dispatch => {
    dispatch({ type : LOGIN_START });
    axios
    .post('http://localhost:5000/api/login', userInfo) 
    .then( res => {
        localStorage.setItem("token", res.data.token)
        dispatch({ type : LOGIN_SUCCESS, payload : res.data})
    })
    .catch( err => {
        dispatch({ type : LOGIN_FAILURE, payload : err})
    })
}

