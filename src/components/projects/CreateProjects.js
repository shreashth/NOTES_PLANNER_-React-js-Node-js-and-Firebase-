import React ,{useState, useEffect} from 'react'
import {connect} from 'react-redux'
import { createProjectAction, getProjectAction } from '../actions/projectActions'
import {useDispatch} from 'react-redux'
import {Redirect} from 'react-router-dom'
import FileBase from 'react-file-base64'




function CreateProjects() {
    const initialState = {title: '', content: '',firstName: '', lastName:'', uid:''}

    const [Project, setProject] = useState(initialState)

    const dispatch = useDispatch()

    
let accessToken=null;
let firstName=null;
let lastName=null;
let uid=null;

if(localStorage.getItem('profile')){

   accessToken= JSON.parse(localStorage.getItem('profile'))?.accessToken
   firstName= JSON.parse(localStorage.getItem('profile'))?.userProfile?.firstName
   lastName= JSON.parse(localStorage.getItem('profile'))?.userProfile?.lastName
   uid= JSON.parse(localStorage.getItem('profile'))?.uid

}




const handleSubmit=(e)=>{
    e.preventDefault();
    // console.log("jio", Project)
    dispatch(createProjectAction(Project))
  
//    setTimeout(()=>{

//    },2000) 
    
    setProject({...initialState})
    
}

const handleChange=(e)=>{

   setProject({...Project, [e.target.id] : e.target.value, firstName, lastName, uid })

}
// console.log(Project)

if(!accessToken) return <Redirect to='/signin' />


return (
    <div className="container" >
        <form onSubmit={handleSubmit} className="white" style={{width:'50%',marginTop:'3%',textAlign:'center',marginLeft:'30%',padding: '2%'}}>
            <h5 className="grey-text text-darken-3">Create a Project</h5>
            <br/>
            <div className="input-field">
                <label htmlFor="title">Title</label>
                <input required  name="title"  type="text" id="title" value={Project.title} onChange={handleChange} />
        
            </div>
            


            <br/><br/>  
        <div className="textarea" style={{maxWidth:'100%'}}>
            <label htmlFor="Content" >Content</label>
            <textarea  required name="content" style={{minWidth:'100%',maxWidth:'100%'}} value={Project.content} type="text" className="row5 col15" row={5} id="content"  onChange={handleChange} /> 
        </div>  
        <br/><br/>
         
            
            <div className="button" style={{display:'flex',justifyContent: 'center',marginTop: '50px'}}>
                <button className="btn pink lighten-1 z-depth-0"  type='submit'>Submit</button>
            </div>
                        
        </form>  
    </div>
)
}

// const mapStateToProps = (state)=>{

// }




export default CreateProjects
