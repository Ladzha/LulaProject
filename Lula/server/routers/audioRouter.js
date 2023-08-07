import express from 'express';
import { getAllAudiosData, getAudioData, getUserAudioData, getNewAudioData, updateAudioData, deleteAudioData} from '../controller/audioController.js';
import { getAllPendingAudiosData, getPendingAudioData, getNewPendingAudioData, deletePendingAudioData } from '../controller/pendingAudioController.js';

export const audioRouter = express.Router();
audioRouter.get('/audio', getAllAudiosData);
audioRouter.get('/audio/:recordid', getAudioData);
audioRouter.get('/audio/records/:userid', getUserAudioData);

audioRouter.post('/audio/post', getNewAudioData);
audioRouter.put('/audio/update/:recordid', updateAudioData);
audioRouter.delete('audio/delete/:recordid', deleteAudioData);

audioRouter.get('/audio/pending', getAllPendingAudiosData);
audioRouter.get('/audio/pending/:recordid', getPendingAudioData);
audioRouter.post('/audio/pending/post', getNewPendingAudioData);
audioRouter.delete('audio/pending/delete/:recordid', deletePendingAudioData);

