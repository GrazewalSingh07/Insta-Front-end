import axios from "axios"
import * as types from "./actionTypes"
    export   const getUser=(query)=>(dispatch,getState)=>{
        try {
   
           return  axios({
            method: "get",
            url: `http://localhost:4000/getalluser/${query}`,
            
            headers: {
                 "Content-Type": "multipart/form-data",
                 'Authorization': 'Bearer '+ getState().loginReducer.token,
                 },
          })
            .then((res)=>{
                dispatch({type:types.GET_USER_SUCCESS,payload:res.data.user})
            }).catch((err)=>{
                console.log(err)
            })

        } catch (error) {
            console.log(error.message)
        }
    }



    export   const getAllUser=()=>(dispatch,getState)=>{
        try {
   
           return  axios({
            method: "get",
            url: `http://localhost:4000/getalluser/`,
            
            headers: {
                 "Content-Type": "multipart/form-data",
                 'Authorization': 'Bearer '+ getState().loginReducer.token,
                 },
          })
            .then((res)=>{
                 dispatch({type:types.GET_USER_SUCCESS,payload:res.data.user})
            }).catch((err)=>{
                console.log(err)
            })

        } catch (error) {
            console.log(error.message)
        }
    }