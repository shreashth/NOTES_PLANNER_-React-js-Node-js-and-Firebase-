import axios from 'axios'

export const createProjectAction = (project) => async (dispatch) =>{

    try{

       const post= await axios.post(`http://localhost:5000/create`, project)

        

        dispatch({type: 'CREATE_PROJECT', payload : {...post.data}})


        console.log(post.data)

    }catch(err){
        console.log(err)
    }


}




export const getProjectAction = () => async (dispatch) =>{
    
    try{

        const projects = await axios.get('http://localhost:5000/getProjects')

        // console.log(projects)
    
        dispatch({type:'GET_PROJECTS', payload: projects.data})

    }catch(err){
        console.log(err)
    }
}



export const deleteProject = (firebaseId) => async (dispatch) =>{
    
    try{

        const response = await axios.delete(`http://localhost:5000/delete/${firebaseId}`)

        // console.log(response)
    
        dispatch({ type:'DELETE_PROJECT', payload: firebaseId })

    }catch(err){
        console.log(err.response)
    }
}