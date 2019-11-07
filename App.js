const express = require('express');
const http = require('http');
const teamRouter = require('./src/server/routes/team');
const tournamentRouter = require('./src/server/routes/tournament');

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());

app.use(express.static('./'));
app.use('/team', teamRouter);
app.use('/tournament', tournamentRouter);

const server = http.createServer(app);

server.listen(port, () => {
  console.log(`Sever is up on port ${ port }`);
});

module.exports = { server };
