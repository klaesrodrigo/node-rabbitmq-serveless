import express, { Router } from 'express';

const port = process.env.PORT || 3000;
const app = express();

const routes = Router();

app.listen(port, () => console.log(`App running at port ${port}`));
