 


import axios from "axios"
 
import * as types from "./actionTypes"

export const loginRequest=()=>{
    return {
        type:types.LOGIN_USER_REQUEST
    }
}

export const loginSuccess=(payload)=>{
    return {
        type:types.LOGIN_USER_SUCCESS,
        payload

    }
}
export const loginFailure=()=>{
    return {
        type:types.LOGIN_USER_FAILURE
        
    }
}

export const Logout=()=>{
    return{
        type:"LOG_OUT"
    }
}
export const logout=(dispatch)=>{
   
    dispatch(Logout())
}
export const login=(data)=>(dispatch)=>{
    console.log(data)
    dispatch(loginRequest())
    return axios.post("http://localhost:4000/Sign-in",data).then((res)=>{
        
        
        sessionStorage.setItem("token",JSON.stringify(res.data.token))
        sessionStorage.setItem("user",JSON.stringify(res.data.user))
        sessionStorage.setItem("followers",JSON.stringify(res.data.follower))
        sessionStorage.setItem("following",JSON.stringify(res.data.following))
        
        console.log(res)
        dispatch(loginSuccess(res.data.token))
        dispatch({type:"GET_POST_SUCCESS",payload:res.data.posts})
        dispatch({type:"GET_FOLLOWER_SUCCESS",payload:res.data.follower})
        dispatch({type:"GET_FOLLOWING_SUCCESS",payload:res.data.following})

    }).catch((err)=>{
        console.log(err)
        dispatch(loginFailure())
    })
}
 