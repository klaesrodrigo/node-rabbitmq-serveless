import express, { Router } from 'express';
import { logger } from './logger';

const port = process.env.PORT || 3000;
const app = express();

const routes = Router();

app.listen(port, () => logger.info(`App running at port ${port}`));
