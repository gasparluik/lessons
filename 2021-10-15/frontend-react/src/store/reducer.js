//reducer on nagu masin/
import {POST_ADD, POST_REMOVE, USER_LOGIN, USER_LOGOUT, POSTS_UPDATE, USER_REGISTER} from "./actions";

const postReducer = (state, action) => {
    switch(action.type){
        case POST_ADD:
            return{
                ...state,
                data: state.data.concat(action.payload)
            }
        case POST_REMOVE:
            return {
                ...state,
                data: state.data.filter(post => post.id !== action.payload)
            }
        //kodutööna lisada uue listi vastu võtmine 
        case POSTS_UPDATE:
            return {
                ...state,
                data: action.payload
            }
        default:
            return state
    }
}

const authReducer = (state, action) => {
    switch(action.type){
        case USER_LOGIN:
            return {
                ...state,
                token: action.payload.token,
                user: action.payload.user
            }
        case USER_LOGOUT:
            return{
                ...state,
                token: null,
                user: null
            }
        case USER_REGISTER:
            return {
                ...state,
                data: state.data.concat(action.payload)
            }
        default:
            return state
    }
}

export { postReducer, authReducer }