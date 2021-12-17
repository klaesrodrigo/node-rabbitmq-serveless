import express, { Router } from 'express';
import { logger } from './logger';
import saveShortConsumer from './src/rabbitmq/consumers/saveShortConsumer';
import routes from './src/routes';

const port = process.env.PORT || 3000;
const app = express();

app.use(express.json());

app.use('/api', routes);
app.use('/', (req, res) => {
  return res.json({ status: 'ok' });
});

new saveShortConsumer().handler();

app.listen(port, () => logger.info(`App running at port ${port}`));
