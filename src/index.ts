import * as dotenv from 'dotenv'
import express, { Request, Response } from 'express';
import cors from 'cors';
import { apiRouter } from './routes';

function bootstrap() {
  dotenv.config();
  
  const app = express();
  app.use(cors({}))

  app.listen(process.env.PORT, () => {
    console.log('server running on port ', process.env.PORT);
  });

  app.get('/', (_req: Request, res: Response) => {
    res.send('Hello World!')
  });

  app.use('/api', apiRouter);
}

bootstrap();
