import express, { Application } from 'express';

const createServer = () => {
  const app: Application = express();

  return app;
};

export default createServer;
