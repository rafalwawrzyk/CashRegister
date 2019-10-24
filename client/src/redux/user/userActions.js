import actionType from './userActionTypes';

// google auth actions
export const googleSignInStart = () => {
    return {
        type:actionType.GOOGLE_SIGN_IN_START
    }
}

// SIGN IN ACTIONS
export const SignInSuccess = (user) => {
    return{
        type:actionType.SIGN_IN_SUCCESS,
        payload:user
    }
}

export const SignInFailure = (error) => {
    return{
        type:actionType.SIGN_IN_FAILURE,
        payload:error
    }
}

// EMAIL AUTH ACTIONS
export const emailSignInStart = (emailAndPassword) => {
    return {
        type:actionType.EMAIL_SIGN_IN_START,
        payload:emailAndPassword
    }
}


export const checkUserSession = () => {
    return {
        type:actionType.CHECK_USER_SESSION
    }
}

// SIGN OUT ACTIONS
export const signOutStart = () => {
    return {
        type:actionType.SIGN_OUT_START
    }
}

export const signOutSuccess = () => {
    return {
        type:actionType.SIGN_OUT_SUCCESS
    }
}


export const signOutFailure = (error) => {
    return {
        type:actionType.SIGN_OUT_FAILURE,
        payload:error
    }
}


// SIGN UP ACTIONS
export const signUpStart = (user) => {
    return{
        type:actionType.SIGN_UP_START,
        payload:user
    }
}

export const signUpSuccess = () => {
    return {
        type:actionType.SIGN_UP_SUCCESS
    }
}

export const signUpFailure = (err) => {
    return {
        type:actionType.SIGN_UP_FAILURE,
        payload:err
    }
}