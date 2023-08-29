import { useDispatch, useSelector } from "react-redux"

import aceApi from "../api/aceApi";
import { onCheckingForm, onSended, onNotSended, clearErrorMessage } from "../store/form/formSlice";

// const answers = {
//   email: 'dylanchavesa@gmail.com',
//   grade: '12-C',

//   employment_status: 'ambos desempleados',
//   family_type: 'biparental',
//   quality_relationships: 'muy buena',
//   couple: '1',

//   average: '96',
//   more_difficult_subject: 'estudios sociales',
//   adequacy: '0',
//   learning_technique: 'Resumenes',

//   favorite_meal_time: 'cena',
//   weight: '60',
//   height: '178',
//   eat_times_day: '4',
//   take_medications: '0',

//   extracurricular_activity: 'hola',
//   comment_for_improvement: 'como',
//   subjects_to_improve: 'estan?',

//   self_esteem: {
//     worthy_appreciation: '5',
//     good_qualities: '5',
//     do_things_well: '5',
//     positive_attitude: '5',
//     satisfied_myself: '5',
//     nothing_to_proud: '5',
//     i_failure: '5',
//     more_respect: '5',
//     useless: '5',
//     bad_person: '5'
//   },
//   social_relationships: {
//     make_friends_easily: '1',
//     bullying_from_classmates: '0',
//     bullying: '1'
//   },
//   anxiety: {
//     body_numb: '4',
//     heated: '4',
//     tremor_in_legs: '4',
//     unable_to_relax: '4',
//     fearing_the_worst: '4',
//     dizzy: '4',
//     strong_heartbeat: '4',
//     unstable: '4',
//     scared: '4',
//     nervous: '4',
//     blunted: '4',
//     tremor_in_hands: '4',
//     unsecure: '4',
//     scared_to_uncontrolled: '4',
//     suffocation: '4',
//     scared_to_die: '4',
//     with_scare: '4',
//     digestive_problems: '4',
//     fades: '4',
//     facial_blush: '4',
//     with_sweats: '4'
//   },
//   depression: {
//     sadness: '3',
//     pessimism: '3',
//     failure: '3',
//     loss_pleasure: '3',
//     feel_guilt: '3',
//     feel_punishment: '3',
//     discomfort: '3',
//     self_criticism: '3',
//     suicide_wishes: '3',
//     crying: '3',
//     agitation: '3',
//     loss_interest: '3',
//     indecision: '3',
//     devaluation: '3',
//     loss_energy: '3',
//     sleep_changes: '3',
//     irritability: '3'
//   },
//   behavioral_interest_changes: {
//     appetite_changes: '3',
//     difficulty_for_concentration: '3',
//     tired: '3',
//     loss_sexual_interest: '3'
//   },
//   last_month_mood: {
//     affected: '5',
//     unable_to_control: '5',
//     stressed: '5',
//     small_irritating_problems: '5',
//     coped_effectively_with_changes: '5',
//     confident_to_handle_problems: '5',
//     things_going_well: '5',
//     cant_handle_to_problems: '5',
//     control_difficulties: '5',
//     under_control: '5',
//     angry_things_out_of_control: '5',
//     remain_things: '5',
//     time_control: '5',
//     difficulties_piling_up: '5',
//   },
//   education: {
//     satisfied_teachers: '1',
//     satisfied_classmates_academic_performance: '1',
//     satisfied_academic_performance: '1',
//     satisfied_teachers_accompaniment: '1',
//     tolerance_respect: '1',
//     innovative_methodologies: '1',
//     update_school_program: '1',
//     implement_tics: '1',
//     satisfied_specialty_teachers_methodologies: '1',
//     satisfied_english_teachers_methodologies: '1'
//   },
//   religion: {
//     satisfied_evangelization_activities: '1',
//     satisfied_religious_classes: '1',
//     read_holy_scriptures: '0',
//     know_about_sacraments: '3',
//     communion_per_month: '4',
//     confess: '2',
//     in_religious_formation_meetings: '0'
//   }
// }

export const useFormStore = () => {

  const { status, errorMessage } = useSelector(state => state.form);
  const dispatch = useDispatch();

  const startSending = async ({ student, result }) => {

    dispatch(onCheckingForm());

    try {
      await aceApi.post('/students', { ...student });
      await aceApi.post('/results', {
        email: student.email,
        grade: student.grade,
        ...result.family,
        ...result.academic_performance,
        ...result.habits,
        ...result.recommendations,
        self_esteem: { ...result.self_esteem },
        social_relationships: { ...result.social_relationships },
        anxiety: { ...result.anxiety },
        depression: { ...result.depression },
        behavioral_interest_changes: { ...result.behavioral_interest_changes },
        last_month_mood: { ...result.last_month_mood },
        education: { ...result.education },
        religion: { ...result.religion },
      });
      localStorage.setItem('completed', true);
      localStorage.setItem('completed-date', new Date().getTime());
      dispatch(onSended());

    } catch (error) {

      dispatch(onNotSended('Vuelva a intentarlo más tarde'));
      setTimeout(() => {
        dispatch(clearErrorMessage());
      }, 1000);
    }

  }

  const checkFormCompleted = async () => {
    const today = new Date().getTime();
    const isFormCompleted = localStorage.getItem('completed');
    const isFormCompletedDate = localStorage.getItem('completed-date');

    const expired = (today - isFormCompletedDate) / (1000 * 60 * 60 * 24);

    if (isFormCompleted || isFormCompletedDate || expired < 365) {
      return dispatch(onSended());
    } else {
      localStorage.clear()
      return dispatch(onNotSended());
    }
  }

  return {
    //*Properties
    status,
    errorMessage,

    //*Methods
    checkFormCompleted,
    startSending,
  }

}