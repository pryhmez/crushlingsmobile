import axios from 'axios';
import { apiConfig } from '../config/axios';

export const addUser = (token, userId, email, name) => {
    return {
        type: 'ADD_USER',
        token,
        userId,
        email,
        name
    }
}

export const signInUser = (email, password) => {

    return (dispatch) => {
        return new Promise((resolve, reject) => {
            // console.warn(email, password, apiConfig.baseUrl + 'user/login')
            axios.post(apiConfig.baseUrl + 'user/login',
                {
                    email,
                    password
                })
                .then((response) => {
                    let res = response.data;
                    dispatch(addUser(
                        res.token,
                        res.user._id,
                        res.user.email,
                        res.user.firstName + res.user.lastName
                    ));


                    // console.warn(response.data.message)
                    if (response) {
                        return resolve(response.data.message)
                    }


                })
                .catch(err => {

                    // dispatch({ type: SIGNUP_USER_FAILED, payload: true });
                    return reject({ message: "something went wrong" + String(err) })
                })
        })

    }
}

export const signUpUser = (firstname, lastname, gender, age, email, phone, password) => {
    return (dispatch) => {
        return new Promise((resolve, reject) => {
            console.warn(email, password, lastname, firstname, gender, phone)
            axios.post(apiConfig.baseUrl + 'user/signup',
                {
                    email,
                    password,
                    firstname,
                    lastname,
                    gender,
                    phone,
                    age
                })
                .then((response) => {
                    let res = response.data;
                    dispatch(addUser(
                        res.token,
                        res.user._id,
                        res.user.email,
                        res.user.firstName + res.user.lastName
                    ));


                    // console.warn(response.data.message)
                    if (response) {
                        return resolve(response.data.message)
                    }


                })
                .catch(err => {

                    // dispatch({ type: SIGNUP_USER_FAILED, payload: true });
                    return reject({ message: "something went wrong" + String(err) })
                })
        })

    }
}
