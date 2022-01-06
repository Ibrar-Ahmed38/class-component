import { GET_USER_SUCESS } from "./action"

const myfirstreducer =(state = {users : []}, action)=>{
    switch(action.type){
        case "GET_USER_SUCESS" :
            return {...state, users : action.users}
        default :
        return state
    }
}

export default myfirstreducer