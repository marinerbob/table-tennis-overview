update stats
set winrate = round(CAST(stats.wins as FLOAT)/stats.plays * 100.0, 2)