import {saveQuestion} from '../utils/api'
import { addQuestionToUser } from './users'

export function receiveQuestions(questions){
    return {
        type:'RECEIVE_QUESTIONS',
        questions
    }
}
export function addAnswerToQuestion(authUser,qid,answer){
    return {
        type:'ADD_ANSWER_TO_QUESTION',
        authUser,
        qid,
        answer
    }
}
export function addQuestion(question){
    return {
        type :'ADD_QUESTION',
        question
    }
}
export function handleSaveQuestion(optionOneText,optionTwoText,author){
    return (dispatch)=>{
        return saveQuestion({optionOneText,optionTwoText,author})
        .then(question=>{
            dispatch(addQuestion(question))
            dispatch(addQuestionToUser(question))
        })
    }
}