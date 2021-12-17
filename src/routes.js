import { Router } from 'express';
import ShortController from './controllers/shortController';

const routes = Router();
const shortController = new ShortController();

routes.get('/short', shortController.short);

export default routes;
