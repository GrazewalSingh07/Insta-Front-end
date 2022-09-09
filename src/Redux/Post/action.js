import * as types from "./actionTypes"
import axios from "axios"
 
 
 export   const createPost=(data)=>(dispatch,getState)=>{
        try {
            console.log(user_name)
            console.log(data)
            data.user_Id=getState().loginReducer.profile._id
          
           
           return  axios({
            method: "post",
            url: "http://localhost:4000/post/create",
            data,
            headers: {
                 "Content-Type": "multipart/form-data",
                 'Authorization': 'Bearer '+ getState().loginReducer.token,
                 },
          })
            .then((res)=>{
                 
                    dispatch( getPost())
                
              
            }).catch((err)=>{
                console.log(err)
            })

        } catch (error) {
            console.log(error.message)
        }
    }

    export   const getPost=(data)=>(dispatch,getState)=>{
        try {
   
           return  axios({
            method: "get",
            url: "http://localhost:4000/post/get",
            
            headers: {
                 "Content-Type": "multipart/form-data",
                 'Authorization': 'Bearer '+ getState().loginReducer.token,
                 },
                
          })
            .then((res)=>{
               dispatch({type:types.GET_POST_SUCCESS,payload:res.data})
            }).catch((err)=>{
                console.log(err)
            })

        } catch (error) {
            console.log(error.message)
        }
    }

    export   const getOthersPost=(data)=>(dispatch,getState)=>{
        try {
        
           return  axios({
            method: "get",
            url: `http://localhost:4000/post/getOthers/${data}`,
         
            headers: {
                 "Content-Type": "multipart/form-data",
                 'Authorization': 'Bearer '+ getState().loginReducer.token,
                 }
              
                
          })
            .then((res)=>{
                console.log(res.data)
                sessionStorage.setItem("SpectationUser",JSON.stringify(res.data.SpectatingUser))
               dispatch({type:types.GET_POST_SUCCESS,payload:res.data.posts})
            }).catch((err)=>{
                console.log(err)
            })

        } catch (error) {
            console.log(error.message)
        }
    }