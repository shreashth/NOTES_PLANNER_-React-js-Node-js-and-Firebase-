import React from 'react'
import moment from 'moment'
import {Link} from 'react-router-dom'
import {useDispatch} from 'react-redux'
import {deleteProject} from '../actions/projectActions'

function ProjectSummary({project}) {
    const dispatch = useDispatch()
    let time;
    if(project?.createdAt?.seconds){

        time = new Date(project?.createdAt?.seconds * 1000)

    }

    const uID = JSON.parse(localStorage.getItem('profile')).uid

    
    // console.log(time)
    
    const deleteThisProject = (firebaseId)=>{
        // console.log( firebaseId)
        dispatch(deleteProject(firebaseId))
    }
    

   


    if(uID != project.authorId){    
        return ''
    }
    

    return (
        <>

        <div className="card z-depth-0 project-summary" style={{width:'40%',margin:'2%'}}>
                <div className="card-content grey-text text darken-3">
         <Link to={`/project/${project.firebaseId}`}>
             <span className="card-title black-text"><b>{project.title && project?.title}</b></span>
         </Link> 
        
        
                    <p className="black-text">Posted By { (project.authorFirstName&& project.authorLastName) != undefined  && `${project?.authorFirstName} ${project?.authorLastName}`}</p>
                <div id="projectSummaryButton">

                    <p className="grey-text">{time ? moment(time.toString()).fromNow() : 'a few seconds ago'}</p>

                    <button className="btn btn-blue" id="deleteButton" onClick={()=>{deleteThisProject(project.firebaseId)}}><i className="material-icons">delete</i></button>

                </div>

                
                </div>
            </div>
    </>
    )
}

export default ProjectSummary
