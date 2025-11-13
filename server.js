// server.js
const jsonServer = require('json-server');
const cors = require('cors');
const express = require('express');

const server = express();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

server.use(cors());
server.use(express.json());
server.use(middlewares);

server.use('/records', router);

const PORT = process.env.PORT || 10000;
server.listen(PORT, () => {
  console.log(`JSON Server is running on port ${PORT}`);
});
