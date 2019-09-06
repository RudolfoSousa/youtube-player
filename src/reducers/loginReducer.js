import { AUTHENTICATE_BEGIN, AUTHENTICATED, UNAUTHENTICATED, AUTHENTICATION_ERROR } from '../actions/login';

const innitial_state = {
    loading: false,
    authenticated: false,
    error: null
}

export default function(state=innitial_state, action) {
  switch(action.type) {
    case AUTHENTICATE_BEGIN:
        return{
            ...state,
            loading: true
        }
    case AUTHENTICATED:
      return { 
        ...state,
        authenticated: true,
        loading: false
    };
    case UNAUTHENTICATED:
      return { ...state, authenticated: false };
    case AUTHENTICATION_ERROR:
      return { ...state, error: action.payload };
      default: 
      return {...state}
  }
}
