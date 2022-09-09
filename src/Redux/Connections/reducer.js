
const initState= {
    followers:[],
    following:[]
}
export const reducer=(state=initState,{type,payload})=>{
    switch(type){
        case("SUCCESS_GETTING_FOLLOWERS"):{
            return{
                followers:payload
            }
        }
        case("SUCCESS_GETTING_FOLLOWING"):{
            return{
                ...state,
                following:payload
            }
        }
        default:{
            return state
        }
    }




}