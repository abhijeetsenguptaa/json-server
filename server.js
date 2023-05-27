const jsonServer = require('json-server');
const app = jsonServer.create()
const route = jsonServer.router('db.json');
const middleware = jsonServer.defaults();

app.use(middleware);

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

app.use(route);



app.listen(8080, () => {
    console.log(`Server is running at the port 8080`);
})
// const jsonServer = require('json-server');
// const server = jsonServer.create();
// const router = jsonServer.router('data.json');
// const middlewares = jsonServer.defaults();

// server.use(middlewares);
// server.use(router);
// server.listen(3000, () => {
//   console.log('JSON Server is running on port 3000');
// });