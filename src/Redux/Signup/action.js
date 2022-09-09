

import axios from "axios"
import * as types from "./actionTypes"

export const registerRequest=()=>{
    return {
        type:types.ADD_USER_REQUEST
    }
}

export const registerSuccess=()=>{
    return {
        type:types.ADD_USER_SUCCESS,

    }
}
export const registerFailure=()=>{
    return {
        type:types.ADD_USER_FAILURE
        
    }
}

export const register=(data)=>(dispatch)=>{
    console.log(data)
    dispatch(registerRequest())
    return axios.post("http://localhost:4000/Sign-up",data).then((res)=>{
        dispatch(registerSuccess())
        console.log(res)
    }).catch((err)=>{
        console.log(err)
        dispatch(registerFailure())
    })
}
 