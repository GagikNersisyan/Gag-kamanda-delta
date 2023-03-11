import express from 'express';
import usersRouter from './src/users/users.rout.js';

const app = express();

const port = 3000;

app.use(express.json());
app.use('/users', usersRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
