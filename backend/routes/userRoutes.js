import express from 'express'
import { authUser } from '../controllers/userController.js';

//create new router object
const router = express.Router();

//when an HTTP POST request is made to the '/auth' path, 
//the authUser function will be called to handle the request. 
router.post('/auth', authUser)

export default router;