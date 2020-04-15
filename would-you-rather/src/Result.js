import React from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import {Grid} from '@material-ui/core'
const MyVoTe=()=>{
    return(
        
            <p style={{backgroundColor:'blue'}}>You Voted</p>
        
    )
}

class Result extends React.Component{
    handleClick=()=>{
        this.props.history.push('/')
    }
    render(){
        const {question,user} = this.props
        const optOneV = question.optionOne.votes.length;
        const optTwoV = question.optionTwo.votes.length;
        const totalV = optOneV + optTwoV;
        const userV = user.answers[question.id];
        return(
            <div>
                <Grid container direction="column" justify="center" alignItems="center" xs={6}>
                    <Grid item>
                        <h3>Results</h3>
                    </Grid>
                    <Grid item>
                        <h4>Would you rather</h4>
                    </Grid>
                    <Grid item xs={12}style={{border:'1px solid gray',backgroundColor:'gray'}}>
                        .............................................................................
                    </Grid>
                    <Grid item>
                        {userV=='optionOne'&&<MyVoTe/>}
                    </Grid>
                    <Grid>
                        <p>{question.optionOne.text}</p>
                        <p>{((optOneV/totalV)*100).toFixed(2)}%</p>
                        <p>{optOneV} out of {totalV} votes</p>
                    </Grid>
                    <Grid item xs={12}style={{border:'1px solid gray',backgroundColor:'gray'}}>
                        .............................................................................
                    </Grid>
                    <Grid item>
                        {userV=='optionTwo'&&<MyVoTe/>}
                    </Grid>
                    <Grid item>
                        <p>{question.optionTwo.text}</p>
                        <p>{((optTwoV/totalV)*100).toFixed(2)}%</p>
                        <p>{optTwoV} out of {totalV} votes</p>
                    </Grid>
                    <Grid item xs={12}style={{border:'1px solid gray',backgroundColor:'gray'}}>
                        .............................................................................
                    </Grid>
                </Grid>
            </div>
        )
    }
} 
function mapStateToProps({users,authUser}){
    const user = users[authUser]
    return {
        user
    }
}
export default withRouter(connect(mapStateToProps)(Result))