import { collection, getDocs,addDoc, onSnapshot, deleteDoc,doc } from "firebase/firestore";
import  {db} from '../config/firebase.js'

import {createProjectNotification} from './notificationFunc.js'



 globalThis.project = false;







export const createProjectfunc = async (req, res) => {
    
   const title= req.body.title;
   const content = req.body.content;
   const firstName = req.body.firstName;
   const lastName = req.body.lastName;
   const uid = req.body.uid;
//    const image = req.body.image;




    // console.log(project)
    
    try{
        
     const newProject=   await addDoc(collection(db, "project"), {
                                title,content,
                                authorFirstName: `${firstName}`,
                                authorLastName: `${lastName}`,
                                authorId: `${uid}`,
                                createdAt: new Date()
                            });
        
      const firebaseId = newProject._key.path.segments[1]

      globalThis.project = {firebaseId: firebaseId, title,content,authorFirstName: `${firstName}`, authorLastName: `${lastName}`, authorId: `${uid}`,createdAt: new Date()}

        
     res.send({firebaseId: firebaseId, title,content,authorFirstName: `${firstName}`, authorLastName: `${lastName}`, authorId: `${uid}`,createdAt: new Date()})
        // res.status(200).send(newProject._key.path.segments[1])

    }catch(err) {
        console.log(err)
        
    }
    
}




export const getProjectsfunc= async (req, res) => {


    try{

        
       const ubsub= await onSnapshot( collection(db, "project"),  (snapshot) => { 
             

          globalThis.projectsCollectionResolved =  snapshot.docs.map(doc =>({firebaseId:doc.id, ...doc.data()}))

        })
        
        if(globalThis.projectsCollectionResolved){

            res.status(200).json(globalThis.projectsCollectionResolved)
            // console.log(globalThis.projectsCollectionResolved)

        }


         
  
    }catch(err){
        console.log(err)
    }
    

}



export const deleteProject = async (req, res) => {

        const projectID = req.params.id

        // console.log(projectID)

    try{

        await deleteDoc(doc(db, "project", `${projectID}`));

        res.status(200).json({message: "Project deleted successfully"})

    }catch(error){
        // console.log(error)

        res.status(500).json({message: "Project Couldn't be deleted", error})

    }
}