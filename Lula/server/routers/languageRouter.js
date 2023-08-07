import express from 'express';
import { getAllLanguagesData, getLanguageData, getNewLanguageData, deleteLanguageData } from '../controller/languageController.js';

export const languageRouter = express.Router();

languageRouter.get('/language', getAllLanguagesData);
languageRouter.get('/language/:languageid', getLanguageData);

languageRouter.post('/language/post', getNewLanguageData);
languageRouter.delete('language/delete/:languageid', deleteLanguageData);