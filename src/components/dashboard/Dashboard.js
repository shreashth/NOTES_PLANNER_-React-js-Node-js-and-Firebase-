import React ,{useEffect} from 'react';
import Notification from './Notification'
import ProjectList from '../projects/ProjectList'
import {useDispatch,useSelector} from 'react-redux'
import {Redirect , useLocation} from 'react-router-dom'
import  './Notification'




function Dashboard(){
    const location = useLocation()  
    const dispatch = useDispatch()
    const projects = useSelector(state=>state.project)
    

    // console.log(projects)



    let accessToken= localStorage.getItem('profile') && JSON.parse(localStorage.getItem('profile')).accessToken ;
    if(!accessToken) return <Redirect to='/signin' />
    

   if(projects.length>0){
    //   console.log( document.getElementById('dashboardDefault')?.style,window)
      
   }



    return(

        <div className = 'container'>
          <div className='row'>  
         

                <div className = 'col s12 m8' style={{width: `67%`}}>
                    <ProjectList projects={projects} />
                </div>
                <div className = 'col s12 m3 ' style={{width:'33%'}}>
                    <Notification  />
                </div>
                </div>

        
        </div>
    )
}




export default Dashboard