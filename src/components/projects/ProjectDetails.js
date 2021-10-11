import React ,{useState}from 'react'
import {useSelector} from 'react-redux'
import Spinner from '../Spinner'

function ProjectDetails(props) {
    const [info,setInfo] = useState(null)
    
    const projects =  useSelector(state => state.project)
    
    const id = props.match.params.id
    let projectToDetail;

    for(let project of projects) {
        if(project.firebaseId == id){

            projectToDetail = project
        }
    }

   let time;

    if(projectToDetail?.createdAt?.seconds){

         time = new Date(projectToDetail?.createdAt?.seconds * 1000)
    }

  
    if(!projectToDetail){

        setTimeout(() => {
            setInfo( "No project found. Please create your own project by clicking on New Project.")

        },20000)



        return(
          <div className="loader">  
           
            <Spinner />
            <div style={{color:'blue',fontSize:'20px'}}>

            {info &&    <h5>{info} </h5>}
            </div>
          </div>
        )
    }

    return (
        <div className="container section project-details" style={{display:'flex',justifyContent: 'center'}}>
            <div className="card z-depth-0" style={{maxWidth:'100%',height:'80%',display:'flex',flexDirection:'column',flexWrap:'wrap' }}>
                <div className="card-content">
                    <span className="card-title"><b>Project Title - {projectToDetail?.title}</b></span>
                    <div style={{minWidth:'100%',maxHeight:'100%',maxWidth:'90vw',display:'flex',flexWrap:'wrap' }}>

                    <textarea disabled  style={{minHeight:'20vh',minWidth:'30vw',outline:'none'}}   value={projectToDetail?.content}></textarea>       
                    </div>
                </div>
                <div className="card-action gret lighten-4 grey-text">
                    <div >Posted by {`${projectToDetail?.authorFirstName} ${projectToDetail?.authorLastName}`}</div>
                    <div>{time ? time.toString() : 'a few seconds ago'}</div>
    {/* {time && time?.toUTCString()} */}

                </div>
            </div>
        </div>
    )
}

export default ProjectDetails
