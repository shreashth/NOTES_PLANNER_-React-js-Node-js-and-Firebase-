import { query, orderBy, limit } from "firebase/firestore";  
import { collection, getDocs,addDoc, onSnapshot, deleteDoc,doc,getDoc } from "firebase/firestore";
// import {} from './projectFunctions.js'
import  {db} from '../config/firebase.js'


// console.log(globalThis.signUpData)

// console.log(globalThis.project)




export const createProjectNotification = async (project) => {
    
    
    try{
        
        await addDoc(collection(db, "notification"), {
            content: 'Added a new Project',
            authorName: `${project.authorFirstName} ${project.authorLastName}`,
            authorId: `${project.authorId}`,
            createdAt: new Date()
          });
        

          return 'Notification Created successfully'
        
    }catch(err) {
        console.log(err)
        
    }
    
}




export const createSignUpNotification = async (data) => {
    
    // const email = data.email;
    // const password = req.body.password;
    const firstName = data.firstName;
    const lastName = data.lastName;
    // const isAdmin = false
    
    try{
        
        await addDoc(collection(db, "notification"), {
            content: 'Joined the party',
            authorName: `${firstName} ${lastName}`,
            // authorId: `${project.authorId}`,
            createdAt: new Date()
          });
        


        
    }catch(err) {
        console.log(err)
        
    }
    
}




export const getNotificationfunc= async (req, res) => {


    try{
        let querySnapshotResolved= []

        const notifyRef = collection(db, "notification");
        

        const q = query(notifyRef, orderBy("createdAt", "desc" ),limit(3));
        
        const querySnapshot = await getDocs(q);
        
        //  const querySnapshot = await getDocs(collection(db, "notification"),limit(3));
           

         querySnapshot.docs.forEach((doc) => {
           
            querySnapshotResolved.push({firebaseId:doc.id, ...doc.data()})

            // console.log(doc.id, " => ", doc.data());
            });


        
        res.status(200).json(querySnapshotResolved)


        



    }catch(err){
        console.log(err)
    }
    

}









setInterval(()=>{

    if(globalThis.project){
        // console.log('heiio')
// console.log(globalThis.project)

        createProjectNotification(globalThis.project)
        globalThis.project = false;
    }


    if(globalThis.signUpData){
        // console.log('heiiohjklhjkl')
// console.log(globalThis.signUpData)

        createSignUpNotification(globalThis.signUpData)
        globalThis.signUpData = false;
    }


}, 5000)