select (select p.login from players as p where p.id = m.winner_id)
		|| '-' ||
	   (select p.login from players as p where p.id = m.loser_id) as pair,
	   (select count(m.winner_score) from matches as ms where m.winner_id = ms.winner_id) wins
		from matches as m where date(m.match_date) > date('now', '-15 day')
		group by pair
		order by pair