import {combineReducers} from 'redux'
import users from './users'
import authUser from './authUser'
import questions from './questions'

const rootReducer = combineReducers({
    users,
    authUser,
    questions
})
export default rootReducer