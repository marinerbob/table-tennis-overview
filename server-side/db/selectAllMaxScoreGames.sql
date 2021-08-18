select (select p.login from players as p where p.id = m.winner_id) as winner,
	   (select p.login from players as p where p.id = m.loser_id) as loser,
		max(m.winner_score) winner_score,
		m.loser_score,
		date(m.match_date) as match_date
		from matches as m