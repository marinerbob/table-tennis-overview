delete from weekly_stats;
INSERT INTO weekly_stats Select p.login as login, (Select count(m.id)
			from matches as m
			where date(m.match_date) > date('now', '-15 day') and (p.id = m.winner_id or p.id = m.loser_id))
			plays,
		( Select count(m.id)
			from matches as m
			where date(m.match_date) > date('now', '-15 day') and p.id = m.winner_id)
			wins,
		( Select count(m.id)
			from matches as m
			where date(m.match_date) > date('now', '-15 day') and p.id = m.loser_id)
			loses,
			0 as winrate
from players as p