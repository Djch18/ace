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

            dispatch(onLogoutUser('Ups! Algo salio mal'));
            setTimeout(() => {
                dispatch(clearMessages());
            }, 1000);
        }
    }

    const startUpdatingUser = async ({ id, role, state }) => {

        try {
            await aceApi.put(`users/${id}`, { role, state });
            dispatch(onSuccessUser('Petición aceptada'));

        } catch (error) {

            dispatch(onLogoutUser('Ups! Algo salio mal'));
            setTimeout(() => {
                dispatch(clearMessages());
            }, 1000);
        }
    }

    const startDeletingUser = async ({ id }) => {

        try {
            await aceApi.delete(`users/${id}`);
            dispatch(onSuccessUser('Usuario eliminado'));

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
