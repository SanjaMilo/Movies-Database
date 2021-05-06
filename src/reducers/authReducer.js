import { SIGNUP_SUCCESS, SIGNUP_ERROR, SIGNIN_SUCCESS, SIGNIN_ERROR, SIGNOUT_SUCCESS } from '../actions/actionTypes';

// Initial state:
const initState = {
    authError: null // at first we have not tried to login yet 
}

const authReducer = (state = initState, action) => {

    switch(action.type) {

        case SIGNIN_ERROR:
        console.log('Sign-in error');
        return {
            ...state,
            authError: 'Sign-in failed' // or other option is -> authError: action.err.message
        }

        case SIGNIN_SUCCESS: 
        console.log('Sign-in success');
        return {
            ...state,
            authError: null // we have logged successfully and we do no have error any more
        }

        case SIGNOUT_SUCCESS:
            console.log('Sign-out success');
            return state; // we don't change anything to the state, just return it as it is

        case SIGNUP_SUCCESS:
        console.log('sign-up success');
        return {
             ...state,
            authError: null // we have signed-up successfully and we do no have error any more
        }

        case SIGNUP_ERROR:
        console.log('sign-up error');
        return {
            ...state,
            authError: action.err.message
        }
        
        default:
            return state;
    }
    // return state
};

export default authReducer;