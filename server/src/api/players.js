import container from 'server/src/serverDIContainer';

//import playerSchema from 'server/src/schemas/player.js';
//import matchSchema from 'server/src/schemas/match.js';

export const getAllPlayers = async () => {
  let playersController = container.resolve('playersController');

  let result = await playersController.getAllPlayers();

  return result;
};

export const getAllPlayersStat = async () => {
  let playersController = container.resolve('playersController');

  let result = await playersController.getAllStatsForPlayers();

  return result;
};


