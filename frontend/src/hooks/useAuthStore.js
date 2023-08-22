import { useDispatch, useSelector } from "react-redux"

import aceApi from "../api/aceApi";
import { clearErrorMessage, onChecking, onLogin, onLogout, onRegister } from "../store/auth/authSlice";


export const useAuthStore = () => {

    const { status, user, errorMessage } = useSelector(state => state.auth);
    const dispatch = useDispatch();

    const startLogin = async ({ email, password }) => {

        dispatch(onChecking());

        try {
            const { data } = await aceApi.post('/auth/login', { email, password })
            localStorage.setItem('token', data.token);
            localStorage.setItem('token-init-date', new Date().getTime());
            dispatch(onLogin(data.user));

        } catch (error) {

            dispatch(onLogout('Credenciales incorrectas'));
            setTimeout(() => {
                dispatch(clearErrorMessage());
            }, 1000);
        }

    }

    const startRegister = async ({ name, first_surname, second_surname, charge, email, password, role }) => {

        dispatch(onChecking());

        // console.log({ name, first_surname, second_surname, charge, email, password, role });

        try {
            const { data } = await aceApi.post('/auth/new', { name, first_surname, second_surname, charge, email, password, role })
            dispatch(onRegister(data.user));

        } catch (error) {

            // if (error.response) {
            //     /*
            //      * The request was made and the server responded with a
            //      * status code that falls out of the range of 2xx
            //      */
            //     console.log(error.response.data);
            //     console.log(error.response.status);
            //     console.log(error.response.headers);
            // } else if (error.request) {
            //     /*
            //      * The request was made but no response was received, `error.request`
            //      * is an instance of XMLHttpRequest in the browser and an instance
            //      * of http.ClientRequest in Node.js
            //      */
            //     console.log(error.request);
            // } else {
            //     // Something happened in setting up the request and triggered an Error
            //     console.log('Error', error.message);
            // }
            // console.log(error);

            dispatch(onLogout('Credenciales incorrectas'));
            setTimeout(() => {
                dispatch(clearErrorMessage());
            }, 1000);
        }

    }

    const CheckAuthToken = async () => {
        const token = localStorage.getItem('token');
        if (!token) return dispatch(onLogout());

        try {
            const { data } = await aceApi.get('auth/renew');
            localStorage.setItem('token', data.token);
            localStorage.setItem('token-init-date', new Date().getTime());
            dispatch(onLogin(data.user))

        } catch (error) {

            localStorage.clear();
            dispatch(onLogout());
        }
    }

    const startLogout = () => {
        localStorage.clear()
        dispatch(onLogout());
    }

    return {
        //*Properties
        status,
        user,
        errorMessage,

        //*Methods
        CheckAuthToken,
        startLogin,
        startLogout,
        startRegister,
    }

}