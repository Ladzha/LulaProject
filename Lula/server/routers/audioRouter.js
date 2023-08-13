import express from 'express';
import { getAllAudiosController, getAudioController, getUserAudioController, addAudioController, updateAudioController, deleteAudioController} from '../controller/audioController.js';
import { getAllPendingController, getPendingController, addPendingController, deletePendingController } from '../controller/pendingController.js';

export const audioRouter = express.Router();
audioRouter.get('/audio', getAllAudiosController);
audioRouter.get('/audio/:recordid', getAudioController);
audioRouter.get('/audio/records/:userid', getUserAudioController);

audioRouter.get('/audio/exercise/records/:imgid', getUserAudioController);

audioRouter.post('/audio/post', addAudioController);
audioRouter.put('/audio/update/:recordid', updateAudioController);
audioRouter.delete('/audio/delete/:recordid', deleteAudioController);

audioRouter.get('/pending', getAllPendingController);
audioRouter.get('/pending/:recordid', getPendingController);
audioRouter.post('/pending/post', addPendingController);
audioRouter.delete('/pending/delete/:recordid', deletePendingController);

