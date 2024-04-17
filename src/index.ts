import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import helmet from 'helmet';
import { join, resolve } from 'path';
import appRouter from './routes/app';
import { errorHandler, notFound } from './middlewares/errorMiddleware';
const { PORT, NODE_ENV } = process.env;

const app = express();

app.use(cors());
app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
if (NODE_ENV === 'prod') {
  app.use(express.static(join(__dirname, '../client/dist')));
  app.get('*', (_req, res) =>
    res.sendFile(resolve(__dirname, '../client/dist'))
  );
} else {
  app.use(appRouter);
}
app.use(notFound);
app.use(errorHandler);
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
