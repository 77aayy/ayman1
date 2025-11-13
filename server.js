const jsonServer = require('json-server');
const server = jsonServer.create();
const path = require('path');

const router = jsonServer.router(path.join(__dirname, 'db.json'));
const middlewares = jsonServer.defaults();

server.use(middlewares);

// CORS fix
server.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, PATCH, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  next();
});

server.use(jsonServer.bodyParser);
server.use(router);

const PORT = process.env.PORT || 10000;
server.listen(PORT, () => {
  console.log('JSON Server is running on port ' + PORT);
});
