import express from 'express';
import {createProjectfunc, getProjectsfunc, deleteProject} from '../routeFunctions/projectFunctions.js'
import {getNotificationfunc} from '../routeFunctions/notificationFunc.js'


const router = express.Router();


router.get('/getProjects' , getProjectsfunc)

router.post('/create' , createProjectfunc)

router.delete('/delete/:id', deleteProject)


router.get('/getnotifications', getNotificationfunc)






export default router