import {addAnswerToQuestion} from '../actions/questions'
import {saveQuestionAnswer} from '../utils/api'

export function receiveUsers(users){
    return {
        type:'RECEIVE_USERS',
        users
    }
}
export function addAnswerToUser(authUser,qid,answer){
    return {
        type:'ADD_ANSWER_TO_USER',
        authUser,
        qid,
        answer
    }
}
export function handleSaveQuestionAnswer(authUser,qid,answer){
    return dispatch=>{
        dispatch(addAnswerToUser(authUser,qid,answer))
        dispatch(addAnswerToQuestion(authUser,qid,answer))
        console.log('authUser',authUser,'qid',qid,'answer',answer)
        return saveQuestionAnswer(authUser,qid,answer).catch(event=>{
            console.log('error: ',event)
        })
    }
}
export function addQuestionToUser({ id, author }){
    return {
        type: 'ADD_QUESTION_TO_USER',
        id,
        author
      };
}