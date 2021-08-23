const config = {
  client: 'sqlite3',
  connection: {
    filename: 'server/db/tnnsDB.db'
  },
  useNullAsDefault: true,
  pool: { min: 0, max: 7 }
};

export default config;
