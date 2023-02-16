import { Request, Response, NextFunction } from 'express';
import * as fs from 'fs';
import path from 'path';

export const getStudentsList = (_req: Request, res: Response, next: NextFunction) => {

  const filePath = path.join(__dirname, '../database/students.json');
  const fileBuffer = fs.readFileSync(filePath, 'utf8');
  const data = JSON.parse(fileBuffer);

  res.status(200).json({ items: data, count: data.length });
  next();
};