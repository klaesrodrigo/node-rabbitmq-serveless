import { generateCode } from '../helpers/generateCode';
import ShortProducer from '../rabbitmq/producers/shortProducer';

export default class ShortController {
  constructor() {
    this.producer = new ShortProducer();
  }

  short = (req, res) => {
    const code = generateCode();
    const msg = {
      url: req.query.url,
      code,
    };

    this.producer.handler(msg);

    return res.json(msg);
  };
}
