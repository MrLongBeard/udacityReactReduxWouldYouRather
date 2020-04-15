import React from 'react'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import {handleSaveQuestion} from './actions/questions'
import {Grid} from '@material-ui/core'
class NewPoll extends React.Component{
    state={
        submit:false,
        opt1:'',
        opt2:''
    }
    handleChange=(event)=>{
        this.setState({[event.target.name]:event.target.value})
    }
    handleSubmit=(event)=>{
        event.preventDefault()
        const {authUser} = this.props
        const {opt1,opt2} = this.state
        new Promise((response,reject)=>{
            this.props.dispatch(handleSaveQuestion(opt1,opt2,authUser))
            setTimeout(()=>response('successfull'),1000)
        })
        .then(()=>{
            this.setState({opt1:'',opt2:'',submit:true})
        })
    }
    render(){
        const {opt1,opt2,submit} = this.state
        const disabled = opt1==''||opt2==''

        if(submit==true){
            return <Redirect to='/'/>
        }
        return(
            <div>
                <Grid container xs={12} direction="column" justify="center" alignItems="center">
                    <Grid item>
                        <h3>New Poll</h3>
                    </Grid>
                    <Grid item>
                        <p>The Question: </p>
                    </Grid>
                    <Grid item>
                        <p>Would you rather...</p>
                    </Grid>
                    <Grid>
                        <form onSubmit={this.handleSubmit}>
                            <input
                            name="opt1"
                            value={opt1}
                            placeholder='Enter Option One'
                            onChange={this.handleChange}
                            required
                            />
                            <p>or</p>
                            <input
                            name="opt2"
                            value={opt2}
                            placeholder='Enter Option Two'
                            onChange={this.handleChange}
                            required
                            />
                            <button type="submit" disabled={disabled}>submit</button>
                        </form>

                    </Grid>
                </Grid>
            </div>
        )
    }
}

function mapStateToProps({authUser}){
    return {
        authUser
    }
}
export default connect(mapStateToProps)(NewPoll)