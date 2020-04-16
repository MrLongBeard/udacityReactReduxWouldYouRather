import React from 'react'
import {Redirect} from 'react-router-dom'

class Teaser extends React.Component{
    state={
        viewPoll:false
    }
    handleClick=()=>{
        this.setState((prevState)=>({viewPoll:!prevState.viewPoll}))
    }
    render(){
        const {question,unanswered} = this.props
        console.log('question',question)
        const btnColor = unanswered===true?'#21ba45':'#2185d0' 
        const btnText = unanswered===true?'Answer Poll':'Result'
        if(this.state.viewPoll===true){
            return <Redirect push to={`/questions/${question.id}`}/>
        }
        return(
            <div>
                <h5>Would you rather</h5>
                <p>{question.optionOne.text}</p>
                <p>or</p>
                <button style={{color:btnColor}} onClick={this.handleClick}>{btnText}</button>
            </div>
        )
    }
}
export default Teaser