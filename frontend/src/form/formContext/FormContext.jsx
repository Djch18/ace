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
        self_esteem: {
            worthy_appreciation: '',
            good_qualities: '',
            do_things_well: '',
            positive_attitude: '',
            satisfied_myself: '',
            nothing_to_proud: '',
            i_failure: '',
            more_respect: '',
            useless: '',
            bad_person: ''
        },
        social_relationships: {
            make_friends_easily: '',
            bullying_from_classmates: '',
            bullying: '',
        },
        anxiety: {
            body_numb: '',
            heated: '',
            tremor_in_legs: '',
            unable_to_relax: '',
            fearing_the_worst: '',
            dizzy: '',
            strong_heartbeat: '',
            unstable: '',
            scared: '',
            nervous: '',
            blunted: '',
            tremor_in_hands: '',
            unsecure: '',
            scared_to_uncontrolled: '',
            suffocation: '',
            scared_to_die: '',
            with_scare: '',
            digestive_problems: '',
            fades: '',
            facial_blush: '',
            with_sweats: ''
        },
        depression: {
            sadness: '',
            pessimism: '',
            failure: '',
            loss_pleasure: '',
            feel_guilt: '',
            feel_punishment: '',
            discomfort: '',
            self_criticism: '',
            suicide_wishes: '',
            crying: '',
            agitation: '',
            loss_interest: '',
            indecision: '',
            devaluation: '',
            loss_energy: '',
            sleep_changes: '',
            irritability: ''
        },
        behavioral_interest_changes: {
            appetite_changes: '',
            difficulty_for_concentration: '',
            tired: '',
            loss_sexual_interest: ''
        },
        last_month_mood: {
            affected: '',
            unable_to_control: '',
            stressed: '',
            small_irritating_problems: '',
            coped_effectively_with_changes: '',
            confident_to_handle_problems: '',
            things_going_well: '',
            cant_handle_to_problems: '',
            control_difficulties: '',
            under_control: '',
            angry_things_out_of_control: '',
            remain_things: '',
            time_control: '',
            difficulties_piling_up: '',
        },
        education: {
            satisfied_teachers: '',
            satisfied_classmates_academic_performance: '',
            satisfied_academic_performance: '',
            satisfied_teachers_accompaniment: '',
            tolerance_respect: '',
            innovative_methodologies: '',
            update_school_program: '',
            implement_tics: '',
            satisfied_specialty_teachers_methodologies: '',
            satisfied_english_teachers_methodologies: '',
        },
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

export default FormContext;