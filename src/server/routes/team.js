const express = require('express');
const router = express.Router();

const { matches } = require('../../../resources/dataset.json');

router.get('/:teamId', (req, res) => {
  try {
    const { teamId } = req.params;

    const teamMatches = matches.filter(({ team }) => team.includes(teamId));

    if (teamMatches.length) {
      return res.status(200).send(teamMatches);
    }
    return res.status(404).send({ Error: `No matches found for team with ID '${ teamId }'` });

  } catch (e) {
    return res.status(500).send({ Error: 'Something went wrong' });
  }
});

router.get('/:teamId/:matchStatus', (req, res) => {
  try {
    const { teamId, matchStatus } = req.params;

    const teamMatches = matches.filter(({ team, status }) => team.includes(teamId) && status === matchStatus);

    if (teamMatches.length) {
      return res.status(200).send(teamMatches);
    }
    return res.status(404).send({ Error: `No matches found for team with ID '${ teamId }' and status '${ matchStatus }'` });

  } catch (e) {
    return res.status(500).send({ Error: 'Something went wrong' });
  }
});

module.exports = router;
