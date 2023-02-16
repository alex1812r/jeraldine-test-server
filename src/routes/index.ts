import { Router } from "express";
import { studentsRouter } from "./students.router";

export const apiRouter = Router();

apiRouter.use('/students', studentsRouter)