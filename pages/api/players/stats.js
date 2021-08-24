import { getAllPlayersStat } from 'server/src/api/players';

export default function handler(req, res) {
    getAllPlayersStat()
      .then((data) => {
        res.send(JSON.stringify(data));
      })
      .catch((err) => console.error(err));
}
  