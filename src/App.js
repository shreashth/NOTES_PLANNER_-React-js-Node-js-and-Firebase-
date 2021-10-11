import React ,{useEffect} from 'react'
import './App.css';
import { BrowserRouter as Router , Switch, Route}  from 'react-router-dom'
import Navbar from './components/layout/Navbar';
import Dashboard from './components/dashboard/Dashboard';
import ProjectDetails from './components/projects/ProjectDetails'
import SignIn from './components/auth/SignIn'
import SignUp from './components/auth/SignUp'
import CreateProjects from './components/projects/CreateProjects'
import {useDispatch} from 'react-redux'
import { getProjectAction } from './components/actions/projectActions'

import {getNotification} from './components/actions/notificationActions'



function App() {

  
  const dispatch = useDispatch()

  

  useEffect(()=>{
  
  dispatch(getProjectAction())

  dispatch(getNotification())
  
   },[dispatch])
  

 
  






  
  return (

    <>
        
        <Router>
     
        <Navbar />

        {/* {localPro  &&  <Navbar  /> } */}
 

        
        <Switch>
          <Route exact path="/"><Dashboard /></Route>

          <Route exact path="/project/:id" component={ProjectDetails} />


          <Route exact path="/signin" component={SignIn} />

          <Route exact path="/signup" component={SignUp} />

          <Route exact path="/create" component={CreateProjects} />


        </Switch>



        </Router>
    </>
  );
}

export default App;
