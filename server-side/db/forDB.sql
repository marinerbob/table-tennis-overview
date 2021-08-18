-- SQLite
select p.login,
	   ( Select count(m.id)
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
			loses
from players as p
order by plays desc