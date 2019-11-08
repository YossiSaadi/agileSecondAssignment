const express = require('express');
const router = express.Router();

const { matches } = require('../../../resources/dataset.json');

router.get('/:tournamentId', (req, res) => {
  try {
    const { tournamentId } = req.params;

    const tournamentMatches = matches.filter(({ tournament }) => tournament.includes(tournamentId));

    if (tournamentMatches.length) {
      return res.status(200).send(tournamentMatches);
    }
    return res.status(404).send({ Error: `No matches found for tournament with ID '${ tournamentId }'` });

  } catch (e) {
    return res.status(500).send({ Error: 'Something went wrong' });
  }
});

router.get('/:tournamentId/:matchStatus', (req, res) => {
  try {
    const { tournamentId, matchStatus } = req.params;

    const tournamentMatches = matches.filter(({ tournament, status }) => tournament.includes(tournamentId) && status === matchStatus);

    if (tournamentMatches.length) {
      return res.status(200).send(tournamentMatches);
    }
    return res.status(404).send({ Error: `No matches found for tournament with ID '${ tournamentId }' and status '${ matchStatus }'` });

  } catch (e) {
    return res.status(500).send({ Error: 'Something went wrong' });
  }
});

module.exports = router;
