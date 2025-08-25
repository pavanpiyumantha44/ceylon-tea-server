import express from 'express'
import { addPerson, getRoles, getPersonCount, getAllPerson, deletePerson } from '../controllers/personController.js';
const router = express.Router();

router.post('/add',addPerson);
router.get('/getRoles',getRoles);
router.get('/getPersonCount',getPersonCount)
router.get('/getAllPerson',getAllPerson)
router.delete('/deletePerson/:id',deletePerson)

export default router;