import axios from "axios"

export const getFollowers=()=>(dispatch,getState)=>{
  
    return  axios({
        method: "get",
        url: "http://localhost:4000/connection/follower",
        
        headers: {
             
             'Authorization': 'Bearer '+ getState().loginReducer.token,
             },
      }).then((res)=>{
       dispatch({type:"SUCCESS_GETTING_FOLLOWERS",payload:res.data})
      }).catch((err)=>{
        console.log(err)
      })
}

export const getFollowing=()=>(dispatch,getState)=>{
  
    return  axios({
        method: "get",
        url: "http://localhost:4000/connection/following",
        
        headers: {
             
             'Authorization': 'Bearer '+ getState().loginReducer.token,
             },
      }).then((res)=>{
        dispatch({type:"SUCCESS_GETTING_FOLLOWING",payload:res.data})
      }).catch((err)=>{
        console.log(err)
      })
}
export const startFollowing=(following)=>(dispatch,getState)=>{
     console.log(following)
    return  axios({
        method: "post",
        url: "http://localhost:4000/connection/startfollowing",
        data:{
            following
        },
        headers: {
             
             'Authorization': 'Bearer '+ getState().loginReducer.token,
             },
      }).then((res)=>{
        dispatch(getFollowing())
      }).catch((err)=>{
        console.log(err)
      })
}