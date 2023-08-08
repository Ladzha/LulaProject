import express from 'express';
import { getAllImgData, getImgData, getSectionImgData, getNewImgData, updateImgData, deleteImgData } from '../controller/imgController.js';

export const imgRouter = express.Router();

imgRouter.get('/img', getAllImgData);
imgRouter.get('/img/:imgid', getImgData);

imgRouter.get('/img/section/:sectionid', getSectionImgData);

imgRouter.post('/img/post', getNewImgData);
imgRouter.put('/img/update/:imgid', updateImgData);
imgRouter.delete('/img/delete/:imgid', deleteImgData);