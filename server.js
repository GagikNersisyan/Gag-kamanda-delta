/* eslint-disable import/no-unresolved */
import http from 'http';


import { app } from './src/app.js';

  const port = process.env.PORT || 3000;

  const server = http.createServer(app);

  server.listen(port, () => {
    console.log(`Example app listening on port ${port} , pid ${process.pid}`);
  });
// }