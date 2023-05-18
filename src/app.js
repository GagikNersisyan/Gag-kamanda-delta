import express from 'express';
import mongoose from 'mongoose';
import fs from 'fs';
import usersRouter from './api/user/user.rout.js';
import laptopsRouter from './api/laptop/laptop.rout.js';
import MousesRouter from './api/mouse/mouse.rout.js';
import SsdsRouter from './api/ssd/ssd.rout.js';
import CasesRouter from './api/case/case.rout.js';
import HddsRouter from './api/hdd/hdd.rout.js';
import RamsRouter from './api/ram/ram.rout.js';
import PcsRouter from './api/pc/pc.rout.js';
import filesRouter from './api/file/file.rout.js';
import AuthRouter from './api/auth/auth.rout.js';
import keyboardsRouter from './api/keyboard/keyboard.rout.js';
import BagsRouter from './api/bag/bag.rout.js';
import { createSuperAdminSeed } from './seeds.js';

const DB_URL = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@mongodbcluster.ujp87nc.mongodb.net/${process.env.DB_NAME}`;
await mongoose.connect(DB_URL);
console.log('DB Connected!');
await createSuperAdminSeed();



if (!fs.existsSync('./uploads')) {
  fs.mkdirSync('./uploads');
}

export const app = express()

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

