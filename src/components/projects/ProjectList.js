import React, {useState} from 'react'
import ProjectSummary from './ProjectSummary'
import Spinner from '../Spinner'

const ProjectList = ({projects}) =>{
    const [info,setInfo] = useState(false)
    
    // console.log(projects)

    const uID = JSON.parse(localStorage.getItem('profile')).uid

    // if(uID != projects.authorId){    
    //     console.log("hello")
    // }


  projects= projects.filter(project => uID == project.authorId )

    if(!projects.length){

        setTimeout(()=>{
            setInfo(true)

        },10000)
    }

     

    return(

        <div className="project-list section" style={{display:'flex',justifyContent:'left',width:'100%',flexWrap:'wrap' }}>
         

         
         { projects.length ? projects?.map((project,i) => {


             return (
                 
                    <ProjectSummary project = {project} key={i} />                 
                
             )
             
         }):
          

        <div className="loader" style={{marginLeft:"20%"}}>
            <Spinner />
                {info && (
                    <div style={{marginTop:"15%"}}> 
                        <span id='dashboardDefault'  style={{color:'blue'}} ><h6>Create your project by clicking on<hr style={{color:'transparent'}}/> <b style={{color:'gray'}}>New Project</b></h6></span>
                    </div>
                )}
         </div>
}   
        </div>
    )


}

export default ProjectList