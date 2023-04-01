import express from 'express';
import mongoose from 'mongoose';
import usersRouter from './src/api/users/users.rout.js';
import productsRouter from './src/api/products/products.rout.js';

mongoose.connect('mongodb+srv://root:<root>@delta.onaxs8m.mongodb.net/?retryWrites=true&w=majority')
  .then(() => console.log('Connected!'));

const app = express();
const port = 3000;

app.use(express.json());
app.use('/users', usersRouter);
app.use('/products', productsRouter);

// eslint-disable-next-line no-unused-vars
app.use((err, req, res, next) => {
  res.status(err.statusCode);
  res.send({
    errors: err.errors,
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});


