const onButtonClick = () => {
  ($("#type option:selected").text() === "Team" ?
    getMatchesByTeamId : getMatchesInTournamentById)($("#id").val(), $("#status option:selected").text());
};

const getMatchesByTeamId = (teamId, status) =>
  getResponseAndPrint(`/team/${teamId}/${status === "All" ? "" : status}`);
const getMatchesInTournamentById = (tournamentId, status) =>
  getResponseAndPrint(`/tournament/${tournamentId}/${status === "All" ? "" : status}`)
const getResponseAndPrint = (path) =>
  fetch(path)
    .then(res => res.json())
    .then(res => $("#response").html(`<xmp class="response"">${JSON.stringify(res, null, '\t')}</xmp>`));

