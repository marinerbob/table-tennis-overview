import container from 'server/src/serverDIContainer';

//import playerSchema from 'server/src/schemas/player.js';
//import matchSchema from 'server/src/schemas/match.js';

export const getAllPlayers = async () => {
  let db = container.resolve('knexDBConnector').db;

  let result = await db('players').select('id', 'login').orderBy('id');

  return result;
};
