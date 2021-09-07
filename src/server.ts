import express = require('express');
import 'express-async-errors';

import {router} from './routes';

const app = express();

app.use(express.json());

app.use(router);

app.use(
  (
    err: Error,
    req: express.Request,
    res: express.Response,
    next: express.NextFunction,
  ) => {
    if (err instanceof Error) {
      return res.status(400).send({error: err.message});
    }

    return res
      .status(500)
      .send({status: 'error', message: 'Internal Server Error'});
  },
);

app.listen(3000, () => console.log('Server is running'));
