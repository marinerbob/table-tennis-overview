import dbConn from "server/src";

export default function handler(req, res) {
  dbConn
    .getAllPlayers()
    .then((data) => {
      res.send(JSON.stringify(data));
      dbConn.closeDBConnection();
    })
    .catch((err) => console.error(err));
};
