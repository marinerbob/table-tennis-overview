const fromCsv = require('./fromcsv');
const toSql = require('./tosql');
const pathName = './matches.csv';

const data = fromCsv(pathName);

console.log(toSql.writeInserts('matches', 'matches', data[0], data[1], ['match_date'], ['winner_login', 'loser_login'], ['match_date']));