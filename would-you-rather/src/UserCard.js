import React from 'react'
import {connect} from 'react-redux'
import Teaser from './Teaser'
import Question from './Question'
import Result from './Result'
import BadPage from './BadPage'
import {Redirect} from 'react-router-dom'
import {Avatar,Grid,Box} from '@material-ui/core';

const Content=(props)=>{
    const {pollType,question,unanswered} = props

    switch(pollType){
        case 'POLL_TEASER':
            return <Teaser question={question} unanswered={unanswered}/>
        case 'POLL_QUESTION':
            return <Question question={question}/>
        case 'POLL_RESULT':
            return <Result question={question}/>
        default:
            return <BadPage /> 
    }
}


class UserCard extends React.Component{

    render(){
        const {author,question,pollType,unanswered=null,badPath} = this.props
        
        const color = unanswered===true?'#21ba45':'#2185d0'
        const top = unanswered===null?'1px solid gray':`1px solid ${color}`
        if(badPath===true){
            return <Redirect to="/questions/bad_id" />
        }
        return(
            <div>
                <Box my={3} style={{ borderRadius: '10px',boxShadow: '0 0 12px 0 rgba(0, 0, 0, 0.16)'}}>
                    
                    <Grid container xs={12} direction="row" justify="flex-start" alignItems="center">
                    <Grid item xs={3}>
                        <Avatar alt="image" src={author.avatarURL[author.id]} />
                    </Grid>
                    <Grid item xs={9}>
                        <h5>{author.name}</h5>
                    </Grid>
                    <Grid item xs={6}>
                        <Content pollType={pollType} question={question} unanswered={unanswered}/>
                    </Grid>
                </Grid>
                    </Box>
            </div>
        )
    }
}
function mapStateToProps({users,questions,authUser},{match,question_id}){
    let pollType,question,author,badPath=false
    
    if(question_id!==undefined){
        question = questions[question_id]
        pollType='POLL_TEASER' 
        author=users[question.author]
    }else{
        const {question_id} = match.params
        question = questions[question_id]
        const user = users[authUser]

        if(question===undefined){
            badPath=true
        }else{
            author=users[question.author]
            pollType='POLL_QUESTION'
            if(Object.keys(user.answers).includes(question.id)){
                pollType='POLL_RESULT'
            }
        }
    }
    return {
        badPath,
        question,
        author,
        pollType
    }
}
export default connect(mapStateToProps)(UserCard)
