import axios from 'axios';
import axiosWithAuth from "../components/axiosWithAuth"
export const URL = "https://haircarebackend.herokuapp.com"

export const LOGIN_HANDLER = "LOGIN_HANDLER";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";


export const loginHandler = (user) => dispatch => {
    dispatch({ type: LOGIN_HANDLER })
    axios
    .post (`${URL}/api/stylists/login`, user)
    .then(res => {
        console.log(res)
        localStorage.setItem(
            'token',
            res.data.token
        )
        // localStorage.setItem("id", res.data.id);
        dispatch({ type: LOGIN_SUCCESS, payload: res.data })
    })
}

export const REGISTER_HANDLER = "REGISTER_HANDLER"
export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const REGISTER_FAILURE = "REGISTER_FAILURE";

export const registerHandler = (user) => dispatch => {
    dispatch({ type: REGISTER_HANDLER })
    console.log(user)
    axios 
    .post (`${URL}/api/stylists/`, user)
    .then(res => {
        console.log(res)
        localStorage.setItem(
            'token',
            res.data.token
        )
        dispatch({ type: REGISTER_SUCCESS, payload: res.data })
    })
    .catch(error =>{
        console.log(error)
    })
}