import ampq from 'amqplib';

const connection = () => ampq.connect('amqp://localhost');

const connChannel = () => connection().then((conn) => conn.createChannel());

export { connection, connChannel };
