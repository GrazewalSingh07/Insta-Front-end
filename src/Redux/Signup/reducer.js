import * as types from "./actionTypes"

const initState={
    registerinprogress:false,
    isRegistered:false,
    registerationFailed:false,

}
export const reducer=(state=initState,{type,payload})=>{
    switch(type){
        case(types.ADD_USER_REQUEST):{
            return{
                ...state,
                registerinprogress:true
            }
        }
        case(types.ADD_USER_SUCCESS):{
            return{
                ...state,
                registerinprogress:false,
                isRegistered:true
            }
        }
        case(types.ADD_USER_FAILURE):{
            return{
                ...state,
                registerinprogress:false,
                isRegistered:false,
                registerationFailed:true
            }
        }
        default:{
            return   state
        }
    }
}