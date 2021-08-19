select
    p1.login as competitor,
    (select count(m1.id) from matches as m1 
    where (p.id = m1.loser_id and p1.id = winner_id) or (p.id = m1.winner_id and p1.id = m1.loser_id)) as plays,
    (select count(m2.id) from matches as m2 
    where p.id = m2.winner_id and p1.id = m2.loser_id) as wins,
    (select count(m3.id) from matches as m3 
    where p.id = m3.loser_id and p1.id = m3.winner_id) as loses
    from players as p
    join players as p1 on p1.id <> p.id
    where p.login = 'amelnikov' and plays > 0
    order by plays desc;