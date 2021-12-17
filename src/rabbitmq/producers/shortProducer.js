import { logger } from '../../../logger';
import { connChannel } from '../../../rabbitmq';

export default class ShortProducer {
  handler = (msg) => {
    try {
      connChannel().then((channel) => {
        const queue = 'short';

        channel.assertQueue(queue, {
          durable: false,
        });

        channel.sendToQueue(queue, Buffer.from(JSON.stringify(msg)));
        logger.info(' [x] Sent %s', JSON.stringify(msg));
      });

      return;
    } catch (err) {
      logger.error(err);
    }
  };
}
