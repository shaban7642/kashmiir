import axios from 'axios';

export const login = (email, password) => async (dispatch) => {
    try {
        dispatch({
            type: 'USER_LOGIN_REQUIST',
        });

        const config = {
            headers: {
                'Content-Type': 'application/json',
            },
        };

        const { data } = await axios.post(
            '/api/users/login',
            { email, password },
            config
        );

        dispatch({
            type: 'USER_LOGIN_SUCCESS',
            payload: data,
        });

        localStorage.setItem('userInfo', JSON.stringify(data));
    } catch (error) {
        console.log(error.response);
        dispatch({
            type: 'USER_LOGIN_FAIL',
            payload: error.message,
        });
    }
};

export const signup = (name, email, password) => async (dispatch) => {
    try {
        dispatch({
            type: 'USER_SIGNUP_REQUIST',
        });

        const config = {
            headers: {
                'Content-Type': 'application/json',
            },
        };

        const { data } = await axios.post(
            '/api/users/register',
            { name, email, password },
            config
        );

        dispatch({
            type: 'USER_SIGNUP_SUCCESS',
            payload: data,
        });

        dispatch({
            type: 'USER_LOGIN_SUCCESS',
            payload: data,
        });

        localStorage.setItem('userInfo', JSON.stringify(data));
    } catch (error) {
        console.log(error.response);
        dispatch({
            type: 'USER_SIGNUP_FAIL',
            payload: error.message,
        });
    }
};
