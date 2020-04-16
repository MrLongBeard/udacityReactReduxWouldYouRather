import React from 'react'
import {connect} from 'react-redux'
import {handleSaveQuestionAnswer} from './actions/users'

class Question extends React.Component{

    state={
        value:''
    }
    handleChange=(event)=>this.setState({value:event.target.value})
    handleSubmit=(event)=>{
        event.preventDefault()
        const {value} = this.state
        if(this.state.value !== ''){
            const {authUser,question} = this.props
            this.props.dispatch(handleSaveQuestionAnswer(authUser,question.id,value)) 
        }
    }
    render(){
        const {value} = this.state
        const {question} = this.props
        console.log('question',question)
        // const disabled = value===''?true:false
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input
                    type="radio"
                    value='optionOne'
                    label={question.optionOne.text}
                    checked={value==='optionOne'}
                    onChange={this.handleChange}
                    /><label>{question.optionOne.text}</label>
                    <br/>
                    <input
                    type="radio"
                    value='optionTwo'
                    label={question.optionTwo.text}
                    checked={value==='optionTwo'}
                    onChange={this.handleChange}
                    /><label>{question.optionTwo.text}</label>
                    <button type="submit">submit</button>
                </form>
            </div>
        )
    }
}
function mapStateToProps({authUser}){
return {
    authUser
}
}
export default connect(mapStateToProps)(Question)