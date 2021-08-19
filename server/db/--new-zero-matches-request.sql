-- SQLite
SELECT 
    m.id,    
    p1.login as winner,
    p2.login as loser,
    m.winner_score,
    m.loser_score,
    m.match_date,
    m.match_type
from matches m
JOIN players p1 on p1.id = m.winner_id
join players p2 on p2.id = m.loser_id
where m.loser_score = 0;
