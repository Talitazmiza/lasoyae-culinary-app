import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT,
    SET_MESSAGE,
} from "./types";

import AuthService from "../Services/auth.service";

export const register = (data) => (dispatch) => {
    return AuthService.register(data).then(
        (response) => {
            dispatch({
                type: REGISTER_SUCCESS,
                payload: { user: response.data.data },
            });
            if (response.data.access_token) {
                localStorage.setItem("user", JSON.stringify(response.data));
            }

            dispatch({
                type: SET_MESSAGE,
                payload: response.data.message,
            });

            return Promise.resolve();
        },
        (error) => {
            const message =
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString();

            dispatch({
                type: REGISTER_FAIL,
            });

            dispatch({
                type: SET_MESSAGE,
                payload: message,
            });

            return Promise.reject();
        }
    );
};

export const login = (data) => (dispatch) => {
    return AuthService.login(data).then(
        (response) => {
            dispatch({
                type: LOGIN_SUCCESS,
                payload: { user: response.data.data },
            });
            if (response.data.access_token) {
                localStorage.setItem("user", JSON.stringify(response.data));
            }

            return Promise.resolve();
        },
        (error) => {
            const message =
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString();

            dispatch({
                type: LOGIN_FAIL,
            });

            dispatch({
                type: SET_MESSAGE,
                payload: message,
            });

            return Promise.reject();
        }
    );
};

export const logout = () => (dispatch) => {
    AuthService.logout();
    localStorage.removeItem("user");
    dispatch({
        type: LOGOUT,
    });
};
