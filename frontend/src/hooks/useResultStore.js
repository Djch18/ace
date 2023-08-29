import { useDispatch, useSelector } from "react-redux"

import aceApi from "../api/aceApi";
import { onLoadCountResults, onLoadGradeCountResults, clearMessages } from "../store/result/resultSlice";


export const useResultStore = () => {

    const { status, results, countResults, gradeCountResults, errorMessage } = useSelector(state => state.result);
    const dispatch = useDispatch();

    const startLoadingHomeCountResults = async () => {
        try {
            const { data } = await aceApi.get('/results/count');
            dispatch(onLoadCountResults({ ...data }));

        } catch (error) {
            console.log('Error cargando resultados');
            console.log(error)
        }
    }

    return {
        //*Properties
        status,
        results,
        countResults,
        gradeCountResults,
        errorMessage,

        //*Methods   
        startLoadingHomeCountResults,
    }
}
