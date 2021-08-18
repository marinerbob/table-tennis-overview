update weekly_stats as ws
set winrate = round(CAST(ws.wins as FLOAT)/ws.plays * 100.0, 2)