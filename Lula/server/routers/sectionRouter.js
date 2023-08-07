import express from 'express';
import { getAllSectionData, getSectionData, getNewSectionData, updateSectionData, deleteSectionData } from '../controller/sectionController.js';

export const sectionRouter = express.Router();

sectionRouter.get('/section', getAllSectionData);
sectionRouter.get('/language/:languageid', getSectionData);

sectionRouter.post('/language/post', getNewSectionData);
sectionRouter.put('/language/update/:languageid', updateSectionData);
sectionRouter.delete('language/delete/:languageid', deleteSectionData);