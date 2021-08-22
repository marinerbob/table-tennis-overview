const config = {
  client: "sqlite3",
  connection: {
    filename: "../db/tnnsDB.db"
  },
  pool: { min: 0, max: 7 }
};

export default config;
