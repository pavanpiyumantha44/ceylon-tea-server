import express from 'express'
import { addPerson, getRoles, getPersonCount, getAllPerson, deletePerson,getAllSupervisors,getAllworkers,getAllTeaPluckers } from '../controllers/personController.js';
const router = express.Router();

router.post('/add',addPerson);
router.get('/getRoles',getRoles);
router.get('/getAllSupervisors',getAllSupervisors);
router.get('/getPersonCount',getPersonCount);
router.get('/getAllPerson',getAllPerson);
router.get('/getAllTeaPluckers',getAllTeaPluckers);
router.get('/getAllWorkers',getAllworkers);
router.delete('/deletePerson/:id',deletePerson);

export default router;