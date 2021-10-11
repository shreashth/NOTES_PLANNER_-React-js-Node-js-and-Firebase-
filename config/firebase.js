import * as firebase from 'firebase/app'

import { getFirestore } from "firebase/firestore"
import dotenv from 'dotenv';


dotenv.config()






const firebaseConfig = {
  
      apiKey: process.env.FIREBASE_API_KEY,
  
      authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  
      projectId: process.env.FIREBASE_PROJECT_ID,
  
      storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  
      messagingSenderId: process.env.FIREBASE_MESSAGE_ID,
  
      appId: process.env.FIREBASE_API_ID,
  
      measurementId: process.env.FIREBASE_MEASUREMENT_ID
  
    };
  


    firebase.initializeApp(firebaseConfig);
  
    export const db = getFirestore()
  
  
    // console.log(db)




    export default firebase;
  
  
  
  
  