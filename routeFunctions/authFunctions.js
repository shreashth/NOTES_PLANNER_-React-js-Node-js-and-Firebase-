import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword , signOut} from "firebase/auth";
import { collection, getDoc,addDoc, onSnapshot ,doc,setDoc} from "firebase/firestore";
import  {db} from '.././config/firebase.js'
import {createSignUpNotification} from './notificationFunc.js'

globalThis.signUpData=false;



export const signIn = async (req, res) => {

    console.log(req.body)
    const email = req.body.email;
    const password = req.body.password;

    const auth = getAuth();


    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;

        return user

      }).then(async(user)=>{
        
        
        
        const docRef = doc(db, "users", `${user.uid}`);
        const docSnap = await getDoc(docRef);
        
        if (docSnap.exists()) {
           

            

            res.status(200).json({...user,userProfile:docSnap.data()})
            // console.log("Document data:", docSnap.data());
          } else {
            // doc.data() will be undefined in this case
            res.status(200).json({...user})

          }



      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        console.log(errorMessage)

    res.status(500).json({errorMessage,error})
   

      });



}






export const signUp = async (req, res) => {

    const email = req.body.email;
    const password = req.body.password;
    const firstName = req.body.first_name;
    const lastName = req.body.last_name;
    const isAdmin = false

    // console.log(email, password, firstName, lastName)

const auth = getAuth();
createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;

   return user 
    // ...
  })
  .then(async (resp)=>{

    // console.log(resp)

    await setDoc(doc(db, "users", resp.uid), {
      
      firstName: firstName,
      lastName: lastName,
      isAdmin: isAdmin
    })


    globalThis.signUpData = {firstName, lastName}

    res.status(200).json({message:'User Sign Up Successfull', user: resp, userProfile: {firstName: firstName, lastName: lastName, isAdmin: isAdmin} })
  

  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..

    console.log(errorMessage,error)

    res.status(500).json({errorMessage,error})

  });


}

// console.log(globalThis)





export const signOutUser = (req, res) => {



        const auth = getAuth();

        signOut(auth).then(() => {
        // Sign-out successful.
            res.status(200).json({message: 'Sign Out successfully'})

        }).catch((error) => {
        // An error happened.

        res.status(500).json({error})

        });
}