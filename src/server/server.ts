import express, { Application } from 'express';
import path from 'path';

import candidatesRouter from '@/routes/candidates';

const createServer = () => {
  const app: Application = express();

  app.use(express.static(path.join(__dirname, '../../public')));

  app.use('/api/v1', candidatesRouter);

  app.get('/', (_, res) => {
    res.sendFile('index.html', { root: path.join(__dirname, '../views') });
  });

  app.use((_, res) => {
    res.status(404).send('Nothing here, please check your data');
  });

  return app;
};

export default createServer;
