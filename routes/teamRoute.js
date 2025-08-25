import express from 'express'
import { getAllTeams,createTeam,deleteTeam,soloWorkers,getTeamInfo,updateTeamInfo,addNewTeamMember,getTeamMembers,deleteTeamMember } from '../controllers/teamsController.js';
const router = express.Router();


router.get('/getAllTeams',getAllTeams);
router.get('/getTeam/:id',getTeamInfo);
router.get('/getTeamMembers/:id',getTeamMembers)
router.put('/edit/:id',updateTeamInfo);
router.post('/add',createTeam);
router.post('/newTeamMember',addNewTeamMember);
router.put('/delete/:id',deleteTeam);
router.get('/withoutTeams',soloWorkers);
router.delete('/deleteTeamMember',deleteTeamMember)

export default router;