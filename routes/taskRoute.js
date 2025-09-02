import express from 'express'
import {createTask,allTasks,updateTaskStatus,getTask,updateTaskInfo} from '../controllers/taskController.js';
const router = express.Router();

router.post('/newTask',createTask);
router.get('/getAllTasks',allTasks);
router.put('/updateStatus/:id',updateTaskStatus);
router.get('/getTask/:id',getTask)
router.put('/edit/:id',updateTaskInfo);
// router.post('/add',createTeam);
// router.post('/newTeamMember',addNewTeamMember);
// router.put('/delete/:id',deleteTeam);
// router.get('/withoutTeams',soloWorkers);
// router.delete('/deleteTeamMember',deleteTeamMember)

export default router;