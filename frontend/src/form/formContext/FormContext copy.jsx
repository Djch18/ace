import { useState, createContext } from "react";

const FormContext = createContext();

export const FormProvider = ({ children }) => {

    const [student, setStudent] = useState({
        email: '',
        grade: '',
        birthday: '',
        gender: '',
        address: ''
    });

    const [result, setResult] = useState({
        email: student.email,
        family: {
            employment_status: '',
            family_type: '',
            quality_relationships: '',
            couple: ''
        },
        academic_performance: {
            average: 0,
            more_difficult_subject: '',
            adequacy: '',
            learning_technique: ''
        },
        habits: {
            favorite_meal_time: '',
            weight: 0,
            height: 0,
            eat_times_day: '',
            take_medications: ''
        },
        self_esteem: [],
        social_relationships: {
            make_friends_easily: '',
            bullying_from_classmates: '',
            bullying: '',
        },
        anxiety: [],
        depression: [],
        behavioral_interest_changes: [],
        last_month_mood: [],
        education: [],
        religion: {
            satisfied_evangelization_activities: '',
            satisfied_religious_classes: '',
            read_holy_scriptures: '',
            know_about_sacraments: '',
            communion_per_month: '',
            confess: '',
            in_religious_formation_meetings: ''
        },
        recommendations: {
            extracurricular_activity: '',
            comment_for_improvement: '',
            subjects_to_improve: ''
        }
    });

    return (
        <FormContext.Provider
            value={{
                student,
                result,
                setStudent,
                setResult
            }}
        >
            {children}
        </FormContext.Provider>
    )
}

// name='result'
// value={result.}
// onChange={(e) => {
//   setResult({ ...result, __: { ...result.__, __: e.target.value } });
// }}

export default FormContext;