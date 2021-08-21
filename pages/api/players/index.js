import { getAllPlayers } from 'server/src/api/players';

export default function handler(req, res) {
  res.send(
    JSON.stringify([
      {
        id: 0,
        login: 'Test2'
      },
      {
        id: 1,
        login: 'Test1'
      }
    ])
  );
  // getAllPlayers()
  //   .then((data) => {
  //     res.send(JSON.stringify(data));
  //   })
  //   .catch((err) => console.error(err));
}
