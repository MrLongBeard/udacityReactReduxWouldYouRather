import React from 'react'
import {connect} from 'react-redux'
import {setAuthUser} from './actions/authUser'
import {Grid} from '@material-ui/core'

class Login extends React.Component{
    state={
        loading:false,
        value:''
    }
    onChange=(event)=>{
        
        this.setState({value:event.target.value})
    }
    handleLoading=()=>{
        this.setState({loading:true})
    }
    handleSubmit=(event)=>{
        event.preventDefault()
        this.props.dispatch(setAuthUser(this.state.value))

    }
    render(){
        const {users} = this.props
        const {value} = this.state
        const disabled = value===''?true:false
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                <Grid container direction="column" justify="center" alignItems="center" xs={12}> 
                    <Grid item>
                        <h1>
                            Would You Rather
                        </h1>
                    </Grid>
                    <Grid item>
                        
                            <select defaultValue={value} placeholder='select user' onChange={(event)=>this.onChange(event)}>
                                <option value=''>select user</option>
                                {users.map(user=>
                                <option key={user.id} value={user.id}>
                                    {user.name}
                                </option>
                                )}
                            </select>
                            
                    </Grid>
                    <Grid item>
                    <button type="submit" disabled={disabled}>login</button>
                        
                    </Grid>

                </Grid>
                </form>
                
            </div>
        )
    }
}

function mapStateToProps({users}){
    return {
        users:Object.values(users)
    }
}
export default connect(mapStateToProps)(Login)
