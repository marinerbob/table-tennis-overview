select (select p.login from players as p where p.id = m.winner_id) as winner,
	   (select p.login from players as p where p.id = m.loser_id) as loser,
		m.winner_score,
		m.loser_score,
		m.match_date
		from matches as m
		where m.loser_score = 0
		order by date(m.match_date) desc