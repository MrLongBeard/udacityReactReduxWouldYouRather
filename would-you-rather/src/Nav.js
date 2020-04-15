import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {setAuthUser} from './actions/authUser'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import {Typography,Avatar} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }));

const Nav =(props)=>{
    
    const classes = useStyles()
    const handleClick=(event)=>{
        event.preventDefault()
        props.dispatch(setAuthUser(null))
    }
    // console.log('authUser',props.users[props.authUser])
        return(
            <div>
                <AppBar position="static">
                    <Toolbar>
                        <Typography variant="h6" className={classes.title}>
                            Would You Rather
                        </Typography>
                        
                        <Avatar src={props.users[props.authUser].avatarURL[props.users[props.authUser].id]}/>
                        <Typography>
                            {props.users[props.authUser].name}      
                        </Typography>
                        <Button color="inherit" onClick={(event)=>handleClick(event)}>Logout</Button>
                    </Toolbar>
                </AppBar>
                <Link to="/">Home</Link>|
                <Link to="/add">New Poll</Link>|
                <Link to="/leaderboard">LeaderBoard</Link>
            </div>
        )
}

function mapStateToProps({users,authUser}){
    return {
        users,
        authUser
    }
}
export default connect(mapStateToProps)(Nav)