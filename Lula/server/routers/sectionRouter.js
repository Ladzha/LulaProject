import express from 'express';
import { getAllSectionData, getSectionData, getNewSectionData, updateSectionData, deleteSectionData } from '../controller/sectionController.js';

export const sectionRouter = express.Router();

sectionRouter.get('/section', getAllSectionData);
sectionRouter.get('/section/:sectionid', getSectionData);

sectionRouter.post('/section/post', getNewSectionData);
sectionRouter.put('/section/update/:sectionid', updateSectionData);
sectionRouter.delete('/section/delete/:sectionid', deleteSectionData);