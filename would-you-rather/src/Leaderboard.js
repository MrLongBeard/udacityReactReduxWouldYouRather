import React from 'react'
import {connect} from 'react-redux'
import {Grid,Avatar,Box} from '@material-ui/core'

class Leaderboard extends React.Component{

    render(){
        const {data} = this.props
        return(
            <div>
                <Box my={3}>
                <Grid container direction="column" justify="center" spacing={3} alignItems="center">
                {data.map((user)=>
                    <>
                    <Grid style={{ borderRadius: '10px',boxShadow: '0 0 12px 0 rgba(0, 0, 0, 0.16)'}}
                            container item direction="column" justify="center" alignItems="center">
                        <Grid item>
                        <Avatar src={user.avatarURL[user.id]}/>    <h3>{user.name}</h3>
                        </Grid>
                        <Grid item>
                            <p>Answered questions: {user.answerCount}</p>
                        </Grid>
                        <Grid item>
                            <p>Created questions: {user.questionCount}</p>
                        </Grid>
                        <Grid item>
                            <p>Score: {user.questionCount + user.answerCount}</p>
                        </Grid>
                    </Grid>
                    </>
                )}
                </Grid>
                </Box>
            </div>
        )
    }
}
function mapStateToProps({users}){
    console.log('users',users)
    const data = Object.values(users).map(user=>
        ({
            id:user.id,
            name:user.name,
            avatarURL:user.avatarURL,
            answerCount:Object.values(user.answers).length,
            questionCount:user.questions.length,
            total:Object.values(user.answers).length+user.questions.length
        })).sort((a,b)=>a.total-b.total).reverse().slice(0,3)
        return {
            data
        }
}
export default connect(mapStateToProps)(Leaderboard)