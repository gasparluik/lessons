export const POST_ADD = "POST_ADD";
export const POST_REMOVE = "POST_REMOVE";
export const USER_LOGIN = "USER_LOGIN"
export const USER_LOGOUT = "USER_LOGOUT"

export const addPost = post => ({
    type: POST_ADD,
    payload: post
})

export const removePost = id => ({
    type: POST_REMOVE,
    payload: id
})

export const loginUser = data => ({
    type: USER_LOGIN,
    payload: data
})

export const logoutUser = data => ({
    type: USER_LOGOUT,
})