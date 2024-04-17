import express from 'express';

import { getHome } from '../controllers/app';

const appRouter = express.Router();

appRouter.get('/', getHome);

export default appRouter;
