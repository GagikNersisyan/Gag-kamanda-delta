/* eslint-disable import/no-unresolved */
import http from 'http';

import cluster from 'cluster';
// import os from 'os';
import { app } from './src/app.js';

const totalCPUs = 2;

if (cluster.isMaster) {
  console.log(`Number of CPUs is ${totalCPUs}`);
  console.log(`Master ${process.pid} is running`);

  // Fork workers.
  for (let i = 0; i < totalCPUs; i = +1) {
    cluster.fork();
  }

  // cluster.on('exit', (worker) => {
  //   console.log(`worker ${worker.process.pid} died`);
  //   console.log("Let's fork another worker!");
  //   cluster.fork();
  // });
} else {
  const port = process.env.PORT || 3000;

  const server = http.createServer(app);

  server.listen(port, () => {
    console.log(`Example app listening on port ${port} , pid ${process.pid}`);
  });
}