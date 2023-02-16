import { Router } from "express";
import { getStudentsList } from "../controllers/students.controller";

export const studentsRouter = Router();

studentsRouter.get('/', getStudentsList);
