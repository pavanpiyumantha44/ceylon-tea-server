import express from 'express'
import {addSingleRecord,getAllRecords,addBulkRecords} from '../controllers/teaPluckingController.js';
const router = express.Router();


router.post('/addSingle',addSingleRecord);
router.post('/addBulk',addBulkRecords);
router.get('/getAll',getAllRecords);
// router.get('/getTeamMembers/:id',getTeamMembers)
// router.put('/edit/:id',updateTeamInfo);
// router.post('/add',createTeam);
// router.post('/newTeamMember',addNewTeamMember);
// router.put('/delete/:id',deleteTeam);
// router.get('/withoutTeams',soloWorkers);
// router.delete('/deleteTeamMember',deleteTeamMember)

export default router;