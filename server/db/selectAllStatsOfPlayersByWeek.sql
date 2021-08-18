select p.login,
	   ( Select count(m.id)
			from matches as m
			where date(m.match_date) > date('now', '-14 day') and (p.id = m.winner_id or p.id = m.loser_id))
			as plays,
		( Select count(m.id)
			from matches as m
			where date(m.match_date) > date('now', '-14 day') and p.id = m.winner_id)
			as wins,
		( Select count(m.id)
			from matches as m
			where date(m.match_date) > date('now', '-14 day') and p.id = m.loser_id)
			as loses
from players as p
order by plays DESC