import express from 'express';
import {signIn, signUp, signOutUser} from '../routeFunctions/authFunctions.js'



const router = express.Router();


router.post('/signin' , signIn)

router.post('/signup' , signUp)


router.get('/signout' , signOutUser)










export default router