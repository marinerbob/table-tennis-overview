module.exports = {
    getAllPlayers: () => `SELECT id, login from players ORDER BY id`,
    getAllPairsWithWinsStat: () => `select (select p.login from players as p where p.id = m.winner_id)
\t\t|| '-' ||
\t   (select p.login from players as p where p.id = m.loser_id) as pair,
\t   (select count(m.winner_score) from matches as ms where m.winner_id = ms.winner_id) wins
\t\tfrom matches as m
\t\tgroup by pair
\t\torder by pair`,
    getWeeklyPairsWithWinsStat: () => `select (select p.login from players as p where p.id = m.winner_id)
\t\t|| '-' ||
\t   (select p.login from players as p where p.id = m.loser_id) as pair,
\t   (select count(m.winner_score) from matches as ms where m.winner_id = ms.winner_id) wins
\t\tfrom matches as m where date(m.match_date) > date('now', '-15 day')
\t\tgroup by pair
\t\torder by pair`
}