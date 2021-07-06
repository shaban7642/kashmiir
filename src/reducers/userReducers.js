export const userLoginReducer = (state = {}, action) => {
    switch (action.type) {
        case 'USER_LOGIN_REQUIST':
            return { loading: true };
        case 'USER_LOGIN_SUCCESS':
            return { loading: false, userInfo: action.payload };
        case 'USER_LOGIN_FAIL':
            return { loading: false, error: action.payload };
        default:
            return state;
    }
};

export const userSignUpReducer = (state = {}, action) => {
    switch (action.type) {
        case 'USER_SIGNUP_REQUIST':
            return { loading: true };
        case 'USER_SIGNUP_SUCCESS':
            return { loading: false, userInfo: action.payload };
        case 'USER_SIGNUP_FAIL':
            return { loading: false, error: action.payload };
        default:
            return state;
    }
};