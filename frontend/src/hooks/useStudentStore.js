import { useDispatch, useSelector } from "react-redux"

import aceApi from "../api/aceApi";
import { onLoadStudents, onLoadStudentResult, clearMessages } from "../store/student/studentSlice";

export const useStudentStore = () => {

    const { status, result, students, errorMessage } = useSelector(state => state.student);
    const dispatch = useDispatch();

    const startLoadingStudents = async () => {
        try {

            const { data } = await aceApi.get('/students');
            console.log(data)
            dispatch(onLoadStudents(data));

        } catch (error) {
            console.log('Error cargando estudiantes');
            console.log(error)
        }
    }

    const startLoadingStudentResult = async (email) => {
        try {
            const { data } = await aceApi.get(`/results/email/${email}`);
            dispatch(onLoadStudentResult(data));

        } catch (error) {
            console.log('Error cargando los resultados del estudiante');
            console.log(error)
        }
    }

    return {
        //*Properties
        status,
        result,
        students,
        errorMessage,

        //*Methods   
        startLoadingStudents,
        startLoadingStudentResult,

    }
}
