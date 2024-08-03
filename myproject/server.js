const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

// Додати затримку до всіх запитів
server.use((req, res, next) => {
  setTimeout(next, 2000);
});

server.use(middlewares);
server.use(router);

const PORT = 4000;
server.listen(PORT, () => {
  console.log(`JSON Server is running on http://localhost:${PORT}`);
});