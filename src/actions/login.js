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

export function login(name){
    return async dispatch => {
        dispatch(authBegin);
        socket.emit("login")
    }
}