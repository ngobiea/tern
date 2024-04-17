import type { Request, Response } from 'express';
import asyncHandler from '../middlewares/asyncHandler';
import { OK } from '../utils/statusCode';
export const getHome = asyncHandler(async (_req: Request, res: Response) => {
  res.status(OK).json('Hello, world!');
});
