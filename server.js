import express from 'express';
import usersRouter from './src/api/users/users.rout.js';

const app = express();
const port = 3000;

app.use(express.json());
app.use('/users', usersRouter);

app.use((err, req, res, next) => {
  res.status(err.statusCode);
  res.send({
    coordinate: err.coordinate,
    internalStatusCode: err.internalStatusCode,
    error: {
      message: err.message,
    },
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
