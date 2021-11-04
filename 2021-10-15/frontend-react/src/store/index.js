import { createContext, useReducer, useEffect } from "react";
import { postReducer, authReducer } from "./reducer";
import combineReducers from "react-combine-reducers";

const initialPosts = {
    data: []
}

const initialAuth = {
    token: null,
    user: null
}

const [combineReducer, initialState] = combineReducers({
    posts: [postReducer, initialPosts],
    auth: [authReducer, initialAuth]
})


export const Context = createContext(initialState)

function Store({ children  }){
    const [state, dispatch] = useReducer(combineReducer, initialState)

    return(
        <Context.Provider value= {[ state, dispatch ]}>
            { children }
        </Context.Provider>
    )
}

export default Store;