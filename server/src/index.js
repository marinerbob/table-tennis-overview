const DB_PATH = 'server/db/tnnsDB.db'; // move to .env
const DBConnector = require('./dto/dbConnector');

let dbConn = new DBConnector(DB_PATH);

export default dbConn;