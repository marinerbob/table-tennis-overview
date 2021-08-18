select p.login,
	   ( Select count(m.id)
			from matches as m
			where m.match_date = '2021-02-18' and (p.id = m.winner_id or p.id = m.loser_id))
			as plays,
		( Select count(m.id)
			from matches as m
			where p.id = m.winner_id and m.match_date = '2021-02-18')
			as wins,
		( Select count(m.id)
			from matches as m
			where p.id = m.loser_id and m.match_date = '2021-02-18')
			as loses
from players as p
order by plays DESC