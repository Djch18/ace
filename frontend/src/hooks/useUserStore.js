import { useDispatch, useSelector } from "react-redux"

import aceApi from "../api/aceApi";
import { onLoadUsers, onSuccessUser, onLogoutUser, clearMessages, } from "../store/user/userSlice";


export const useUserStore = () => {

    const { status, user, users, errorMessage } = useSelector(state => state.user);
    const dispatch = useDispatch();

    const startLoadingUsers = async () => {
        try {

            const { data } = await aceApi.get('/users/new');
            dispatch(onLoadUsers(data));

        } catch (error) {
            console.log('Error cargando usuarios');
            console.log(error)
        }
    }

    const startSavingUser = async ({ name, first_surname, second_surname, charge, email, password, role, state }) => {

        try {
            await aceApi.post('users', { name, first_surname, second_surname, charge, email, password, role, state })
            dispatch(onSuccessUser('Usuario creado'));

        } catch (error) {

            if (error.response) {
                /*
                 * The request was made and the server responded with a
                 * status code that falls out of the range of 2xx
                 */
                console.log(error.response.data);
                console.log(error.response.status);
                console.log(error.response.headers);
            } else if (error.request) {
                /*
                 * The request was made but no response was received, `error.request`
                 * is an instance of XMLHttpRequest in the browser and an instance
                 * of http.ClientRequest in Node.js
                 */
                console.log(error.request);
            } else {
                // Something happened in setting up the request and triggered an Error
                console.log('Error', error.message);
            }
            console.log(error);

            dispatch(onLogoutUser('Ups! Algo salio mal'));
            setTimeout(() => {
                dispatch(clearMessages());
            }, 1000);
        }
    }

    const startUpdatingUser = async ({ id, role, state }) => {

        try {
            const { data } = await aceApi.put(`users/${id}`, { role, state });
            dispatch(onLoadUsers(data));

        } catch (error) {

            dispatch(onLogoutUser('Ups! Algo salio mal'));
            setTimeout(() => {
                dispatch(clearMessages());
            }, 1000);
        }
    }

    const startDeletingUser = async ({ id }) => {

        try {
            const { data } = await aceApi.delete(`users/${id}`);
            dispatch(onLoadUsers(data));

        } catch (error) {

            dispatch(onLogoutUser('Ups! Algo salio mal'));
            setTimeout(() => {
                dispatch(clearMessages());
            }, 1000);
        }
    }

    return {
        //*Properties
        status,
        user,
        users,
        errorMessage,

        //*Methods   
        startLoadingUsers,
        startSavingUser,
        startUpdatingUser,
        startDeletingUser,
    }

}
