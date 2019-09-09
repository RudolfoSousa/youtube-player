import socketIOClient from "socket.io-client";
const socket = socketIOClient("http://127.0.0.1:8000");

export const AUTHENTICATE_BEGIN = "AUTHENTICATE_BEGIN";
export const AUTHENTICATED = "authenticated_user";
export const UNAUTHENTICATED = "unauthenticated_user";
export const AUTHENTICATION_ERROR = "authentication_error";

export const authBegin = () => ({
    type: AUTHENTICATE_BEGIN
})

export const authSuccess = () => ({
    type: AUTHENTICATED
})

export const authFailed = (error) => ({
    type: UNAUTHENTICATED,
    payload: {error}
})

export function login(user){
    return async dispatch => {
        localStorage.setItem('user', user);
        dispatch(authBegin());
        socket.emit("login", user, (valido) => {
            if(valido){
                dispatch(authSuccess());
            }else{
                var error = true;
                dispatch(authFailed(error));
            }
        })
    }
}