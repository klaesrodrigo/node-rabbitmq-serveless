import { logger } from '../../../logger';
import { connChannel } from '../../../rabbitmq';

export default class saveShortConsumer {
  handler = (msg) => {
    try {
      connChannel().then((channel) => {
        const queue = 'short';

        channel.assertQueue(queue, {
          durable: false,
        });

        logger.info(
          ' [*] Waiting for messages in %s. To exit press CTRL+C',
          queue
        );
        channel.consume(
          queue,
          function (msg) {
            logger.info(' [x] Received %s', msg.content.toString());
          },
          {
            noAck: true,
          }
        );
      });

      return;
    } catch (err) {
      logger.error(err);
    }
  };
}
