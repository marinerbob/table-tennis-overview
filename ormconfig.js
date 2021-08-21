module.exports = {
  type: 'sqlite',
  database: './server/db/tnnsDB.db',
  filename: './server/db/tnnsDB.db',
  sychronize: false,
  entities: ['./server/src/entities/*.js']
};
