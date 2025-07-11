import express from 'express'
import { addPerson } from '../controllers/personController.js';
const router = express.Router();

router.post('/add',addPerson);


export default router;