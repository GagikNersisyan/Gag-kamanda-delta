import express from 'express';
import mongoose from 'mongoose';
import fs from 'fs';
import usersRouter from './src/api/user/user.rout.js';
import laptopsRouter from './src/api/laptop/laptop.rout.js';
import MousesRouter from './src/api/mouse/mouse.rout.js';
import SsdsRouter from './src/api/ssd/ssd.rout.js';
import CasesRouter from './src/api/case/case.rout.js';
import HddsRouter from './src/api/hdd/hdd.rout.js';
import RamsRouter from './src/api/ram/ram.rout.js';
import PcsRouter from './src/api/pc/pc.rout.js';
import filesRouter from './src/api/file/file.rout.js';
import AuthRouter from './src/api/auth/auth.rout.js';
import keyboardsRouter from './src/api/keyboard/keyboard.rout.js';
import BagsRouter from './src/api/bag/bag.rout.js';
import { createSuperAdminSeed } from './src/seeds.js';

const DB_URL = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}
@delta.cfefhoj.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;
mongoose.connect(DB_URL).then(() => console.log('Connected!'));


await createSuperAdminSeed();



if (!fs.existsSync('./uploads')) {
  fs.mkdirSync('./uploads');
}

const app = express();
const port =  3000 || process.env.PORT

app.use(express.json());
app.use(express.static('./uploads'));
app.use('/users', usersRouter);
app.use('/laptops', laptopsRouter);
app.use('/Mouses', MousesRouter);
app.use('/Ssds',SsdsRouter);
app.use('/Cases',CasesRouter);
app.use('/Hdds',HddsRouter);
app.use('/Rams',RamsRouter);
app.use('/Pcs',PcsRouter);
app.use('/files', filesRouter);
app.use('/Auth', AuthRouter);
app.use('/Keyboards', keyboardsRouter);
app.use('/Bags',BagsRouter)
// eslint-disable-next-line no-unused-vars
// eslint-disable-next-line no-unused-vars
app.use((err, req, res, next) => {
  try {
    console.log('error___', err);
    res.status(err.statusCode);
    res.send({
      errors: err.errors,
    });
  } catch {
    res.send({
      err,
    });
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

