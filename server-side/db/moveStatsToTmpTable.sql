delete from stats;
INSERT INTO stats Select p.login as login, (Select count(m.id)
			from matches as m
			where p.id = m.winner_id or p.id = m.loser_id)
			plays,
		( Select count(m.id)
			from matches as m
			where p.id = m.winner_id)
			wins,
		( Select count(m.id)
			from matches as m
			where p.id = m.loser_id)
			loses,
			0 as winrate
from players as p