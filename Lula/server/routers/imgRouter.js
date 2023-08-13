import express from 'express';
import { getAllImgController, getImgController, getImgSectionController, addImgController, updateImgController, deleteImgController, getData } from '../controller/imgController.js';

export const imgRouter = express.Router();

imgRouter.get('/img', getAllImgController);
imgRouter.get('/img/:imgid', getImgController);

imgRouter.get('/img/section/:sectionid', getImgSectionController);

imgRouter.post('/img/post', addImgController);
imgRouter.put('/img/update/:imgid', updateImgController);
imgRouter.delete('/img/delete/:imgid', deleteImgController);

imgRouter.post('/img/getaudio', getData);