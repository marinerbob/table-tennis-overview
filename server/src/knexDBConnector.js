import * as knex from "knex";

class KnexDBConnector {
  constructor(config) {
    this.db = knex(config);
  }

  get db() {
    return this.db;
  }
}

export default KnexDBConnector;
