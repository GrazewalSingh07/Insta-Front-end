import * as types from "./actionTypes"
const initState={
    users:[]
}
export const reducer=(state=initState,{type,payload})=>{
    switch(type){
        case(types.GET_USER_SUCCESS):{
            return{
                ...state,
                users:payload
            }
        }
        default:{
            return state
        }
    }
}