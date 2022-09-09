import * as types from "./actionTypes"
const initState={
    Mypost:[],
    
}
export const reducer=(state=initState,{type,payload})=>{
    switch(type){
        case(types.GET_POST_SUCCESS):{
            return{
                ...state,
                Mypost:payload
            }
        }
        default:{
            return state
        }
    }
}