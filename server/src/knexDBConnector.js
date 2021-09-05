import * as knex from 'knex';

class KnexDBConnector {
  constructor(config) {
    this.db = knex(config);
  }
}

export default KnexDBConnector;
