const users=(state={},action)=>{
    switch(action.type){
        case 'RECEIVE_USERS':
            return {
                ...state,
                ...action.users
            }
        case 'ADD_ANSWER_TO_USER':
            const {authUser,qid,answer} = action
            return {
                ...state,
                [authUser]:{
                    ...state[authUser],
                    answers:{
                        ...state[authUser].answers,
                        [qid]:answer
                    }
                }
            }
        case 'ADD_QUESTION_TO_USER':
            return {
                ...state,
                [action.author]: {
                ...state[action.author],
                questions: state[action.author].questions.concat(action.id)
                }
            }
        default: return state
    }
}
export default users