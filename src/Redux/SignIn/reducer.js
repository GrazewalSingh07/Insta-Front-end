import * as types from "./actionTypes"

const initState={
    isLoggedin:JSON.parse(sessionStorage.getItem("token"))?true:false,
    token:JSON.parse(sessionStorage.getItem("token"))||"",
    isloggin:false,
    loginFailed:false,
    profile:JSON.parse(sessionStorage.getItem("user"))||{},
    follower:null,
    following:null,
    posts:null
}
export const reducer=(state=initState,{type,payload})=>{
    switch(type){
        case(types.LOGIN_USER_REQUEST):{
            return{
                ...state,
                isloggin:true
            }
        }
        case(types.LOGIN_USER_SUCCESS):{
            return {
                ...state,
                token:JSON.parse(sessionStorage.getItem("token"))||payload,
                isLoggedin:true,
                isloggin:false,

            }
        }
        case("PROFILE"):{
            return{
                ...state,
                profile:JSON.parse(sessionStorage.getItem("user"))
            }
        }
        case (types.LOGIN_USER_FAILURE):{
            return{
                ...state,
                isloggin:false,
                isLoggedin:false,
                loginFailed:true
            }
        }
        case("LOG_OUT"):{
            return{
            //    ...state,
               token:JSON.parse(sessionStorage.getItem("token")),
               isLoggedin:false,
            }
        }
        case('GET_POST_SUCCESS'):{
            return{
                ...state,
                posts:payload
            }
        }
        case('GET_FOLLOWER_SUCCESS'):{
            return{
                ...state,
                follower:payload
            }
        }
        case('GET_FOLLOWING_SUCCESS'):{
            return{
                ...state,
                following:payload
            }
        }
        default:{
            return   state
        }
    }
}