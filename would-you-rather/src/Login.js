import React,{useState} from 'react'
import {connect} from 'react-redux'
import {setAuthUser} from './actions/authUser'
import {Grid} from '@material-ui/core'
import {useHistory} from 'react-router-dom'


function Login(props){
    const [state,setState]=useState({
        loading:false,
        value:''
    })
    const history=useHistory()
    const onChange=(event)=>{
        
        setState({...state,value:event.target.value})
    }
    
    const handleSubmit=async (event)=>{
        event.preventDefault()
        await props.dispatch(setAuthUser(state.value))
        history.push('/')
    }
    
        const {users} = props
        const disabled = state.value===''?true:false
        return(
            <div>
                <form onSubmit={handleSubmit}>
                <Grid container direction="column" justify="center" alignItems="center"> 
                    <Grid item>
                        <h1>
                            Would You Rather
                        </h1>
                    </Grid>
                    <Grid item>
                        
                            <select defaultValue={state.value} placeholder='select user' onChange={(event)=>onChange(event)}>
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

function mapStateToProps({users}){
    return {
        users:Object.values(users)
    }
}
export default connect(mapStateToProps)(Login)
