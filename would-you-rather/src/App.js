import React from 'react';
import {handleInitialData} from './actions/shared'
import {connect} from 'react-redux'
import {BrowserRouter, Route,Switch} from 'react-router-dom'
import Login from './Login'
import Nav from './Nav'
import Home from './Home'
import Leaderboard from './Leaderboard'
import BadPage from './BadPage'
import NewPoll from './NewPoll'
import UserCard from './UserCard';


class App extends React.Component {
  
  componentDidMount(){
    this.props.dispatch(handleInitialData())
  }
  render(){
    const {authUser} = this.props
    return (
      <BrowserRouter>
      <div className="App">
        {authUser==null?
        <Route render={()=>(<Login/>)}/>:
        <div>
          <Nav/>
          <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/questions/bad_id" component={BadPage}/>
          <Route path="/questions/:question_id" component={UserCard}/>
          <Route path="/add" component={NewPoll}/>
          <Route path="/leaderboard" component={Leaderboard}/>
          <Route component={BadPage}/>
          </Switch>
        </div>
        }
      </div>
      </BrowserRouter>
  );
}
}

function mapStateToProps({authUser})
{

  return {
    authUser
  }
}

export default connect(mapStateToProps)(App);
