import dbConn from "server/src";

export default function handler(req, res) {
  res.send(JSON.stringify({ hello: 'hello' }));
};
