select count(m.id) as count_matches,
strftime('%Y-%m', m.match_date) as month_period
from matches as m
GROUP by month_period;