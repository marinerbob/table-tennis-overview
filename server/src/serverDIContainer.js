import { createContainer, asClass, InjectionMode } from 'awilix';

import config from './dbConfig';
import KnexDBConnector from './knexDBConnector';
import MatchesController from 'server/src/controllers/matchesController';
import PlayersController from 'server/src/controllers/playersController';

const container = createContainer({
  injectionMode: InjectionMode.CLASSIC
});

container.register({
  knexDBConnector: asClass(KnexDBConnector).inject(() => ({ config })),
  matchesController: asClass(MatchesController),
  playersController: asClass(PlayersController)
});

export default container;
