import bodyParser from 'body-parser'
import express from 'express';
import { router } from './routers/route';

export const server = express();
server.use(bodyParser.urlencoded({extended: false}))
server.use(bodyParser.json());
server.use('/api/v1', router);