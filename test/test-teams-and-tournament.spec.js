const { assert } = require('chai');
const request = require('supertest');
const { server } = require('../App');

describe('Rest API test', () => {

  it('should bring all matches with team id', async () => {
    const response = await request(server).get('/team/1').expect(200);
    assert.equal(response.body.length, 2);
    assert(response.body.every(match => match.team.includes('1')));
  });

  it('should bring all matches with team id filtered by status', async () => {
    const response = await request(server).get(`/team/3/Upcoming`).expect(200);
    assert.equal(response.body.length, 1);
    assert(response.body.every(match => match.status === 'Upcoming'));
  });

  it('should get error 404 message when entered non existing team id', async () => {
    await request(server).get('/team/10').expect(404);
  });

  it('should get error 404 message when entered wrong status', async () => {
    await request(server).get('/team/something').expect(404);
  });

  it('should get all matches by tournament id', async () => {
    const response = await request(server).get('/tournament/3').expect(200);
    assert.equal(response.body.length, 4);
    assert(response.body.every(match => match.tournament === '3'));
  });

  it('should get all matches by tournament id filtered by status', async () => {
    const response = await request(server).get('/tournament/3/Played').expect(200);
    assert.equal(response.body.length, 2);
    assert(response.body.every(match => match.status === 'Played'));
  });

  it('should get error 404 message when entered non existing tournament id', async () => {
    await request(server).get('/tournament/10').expect(404);
  });

  after((done) => server.close(done));
});
