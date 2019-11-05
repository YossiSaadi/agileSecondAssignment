const express = require('express');

const { teams, matches, tournaments } = require('./resources/dataset');

const teamRouter = require('./src/server/routes/team');
const tournamentRouter = require('./src/server/routes/tournament');

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());

app.use(express.static('./'));
app.use('/team', teamRouter);
app.use('/tournament', tournamentRouter);

app.listen(port, () => {
  console.log(`Sever is up on port ${ port }`);
});

module.exports = {
  app,
  teams,
  matches,
  tournaments
};
