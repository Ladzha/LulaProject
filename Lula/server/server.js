import  express  from "express";
import dotenv from 'dotenv';
import cors from 'cors';
import path from 'path';
import cookieParser from 'cookie-parser';

import { audioRouter } from './routers/audioRouter.js';
import { avatarRouter} from './routers/avatarRouter.js';
import { commentRouter } from './routers/commentRouter.js';
import { imgRouter } from './routers/imgRouter.js';
import { languageRouter } from './routers/languageRouter.js';
import { sectionRouter } from './routers/sectionRouter.js';
import { userRouter} from './routers/userRouter.js';

dotenv.config();
const app = express();

app.use(cors());
app.use(express.urlencoded({extended: true}));
app.use(express.json()) //for work with json 
app.use(cookieParser());

app.use('/api', audioRouter);
app.use('/api', avatarRouter);
app.use('/api', commentRouter);
app.use('/api', imgRouter);
app.use('/api', languageRouter);
app.use('/api', sectionRouter);
app.use('/api', userRouter);


app.get('/server', (request, response)=>{
    response.send('I am working');
})

app.listen(process.env.PORT, ()=>{
    console.log('I am listening') 
})