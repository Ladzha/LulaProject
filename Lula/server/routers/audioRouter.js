import express from 'express';
import { getAllAudiosController, getAudioController, getUserAudioController, addAudioController, updateAudioController, deleteAudioController} from '../controller/audioController.js';
import { getAllPendingController, getPendingController, addPendingController, deletePendingController, getPendingWithUserInfoController } from '../controller/pendingController.js';
import { authMiddleware } from '../middleware/authMiddleware.js';
import { roleMiddleware } from '../middleware/roleMiddleware.js';


export const audioRouter = express.Router();
audioRouter.get('/audio', getAllAudiosController);
audioRouter.get('/audio/:recordid', getAudioController);
audioRouter.get('/audio/records/:userid', getUserAudioController);

audioRouter.get('/audio/exercise/records/:imgid', getUserAudioController);

audioRouter.post('/audio/post', addAudioController); //only for ADMIN
audioRouter.put('/audio/update/:recordid', updateAudioController);  
audioRouter.delete('/audio/delete/:recordid', deleteAudioController);  // roleMiddleware(['admin']), only for ADMIN

audioRouter.get('/pending', getAllPendingController); //only for ADMIN

audioRouter.get('/pending/info/userinfo/:recordid', getPendingWithUserInfoController); //only for ADMIN

audioRouter.get('/pending/:recordid', getPendingController); //only for ADMIN
audioRouter.post('/pending/post', addPendingController); //only for logged in users and admin
audioRouter.delete('/pending/delete/:recordid', deletePendingController); //only for ADMIN

