import React,{useState} from 'react'
import {connect} from 'react-redux'
import UserCard from './UserCard'
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import {Grid,Typography,Box} from '@material-ui/core'


function a11yProps(index) {
    return {
      id: `wrapped-tab-${index}`,
      "aria-controls": `wrapped-tabpanel-${index}`
    };
  }

const Home =(props)=>{
    const [value,setValue] = useState("one")
    
    const handleChange=(event,newValue)=>{
        setValue(newValue)
    }
    
    
    
    const {questionData} = props
    return(
        <div>
            <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="primary"
            textColor="primary"
            centered
            >
                <Tab
                value="one" 
                label='Unanswered'
                {...a11yProps("one")}
                />
                <Tab 
                value="two"
                label='Answered'
                {...a11yProps("two")}
                />
            </Tabs>
            {value=="one"&&questionData.answered.map(question=>(
                        <Grid container direction="column" justify="center" spacing={3} alignItems="center" xs={12}>
                            <Grid item xs={12}>
                                <UserCard
                                key={question.id}
                                question_id={question.id}
                                unanswered={true}
                                />
                            </Grid>
                        </Grid>
                    ))}
            {value=="two"&&questionData.unanswered.map(question=>(
                        <Grid container xs={12} direction="column" justify="center" spacing={3} alignItems="center">
                            <Grid item xs={12}>
                                <UserCard
                                key={question.id}
                                question_id={question.id}
                                unanswered={false}
                                />
                            </Grid>
                        </Grid>
                        
                    ))}
        </div>
    )
    
}
function mapStateToProps({users,authUser,questions}){
    const answeredIds = Object.keys(users[authUser].answers)
    const answered = Object.values(questions).filter(question=>!answeredIds.includes(question.id)).sort((a,b)=>b.timestamp - a.timestamp)
    const unanswered = Object.values(questions).filter(question=>answeredIds.includes(question.id)).sort((a,b)=>b.timestamp-a.timestamp)
    return {questionData:{
        answered,
        unanswered
    } }
}
export default connect(mapStateToProps)(Home)


