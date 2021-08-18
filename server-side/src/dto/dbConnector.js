const sqlite3 = require('sqlite3').verbose();
const proceduresSchema = require('./proceduresSchema');
const fs = require('fs');

class DBConnector {
    constructor(path) {
        this.DB_PATH = path;
        this.dbObj;
    }

    openDBConnection () {
        const { DB_PATH } = this;
        let db = new sqlite3.Database(DB_PATH, sqlite3.OPEN_READWRITE, err => {
            if (err) {
                return console.error(err.message);
            }
        
            console.log(`Connected to the DB located in ${DB_PATH}`)
        });

        this.dbObj = db;

        return db;
    }

    closeDBConnection () {
        const { DB_PATH, dbObj } = this;

        return dbObj.close(err => {
            if (err) {
                return console.error(err.message);
            }
        
            console.log(`The DB connection located in ${DB_PATH} closed`);
        })
    }

    getAllPlayers () {
        const db = this.openDBConnection();
        const { getAllPlayers } = proceduresSchema;

        return new Promise(resolve => {
            db.all(getAllPlayers(), [], (err, rows) => {
                if (err) {
                    throw err;
                }

                resolve([...rows]);
            });
        })
    }

    _groupUniquePairs (rows) {
        let data = [...rows];
        let stat = {};
        let newStat = {};

        data.forEach(el => {
            stat[el.pair] = {
                pair: el.pair,
                wins: el.wins
            };
        });


        Object.keys(stat).forEach(pair => {
            if (!newStat[pair]) {
                let reversedPair = pair.split('-').reverse().join('-');
                let wins = stat[pair] && stat[pair].wins || 0;
                let loses = stat[reversedPair] && stat[reversedPair].wins || 0;
                let plays = wins + loses;
                let winrate1st = plays && Math.round((wins / plays) * 100)|| 0;
                let winrate2nd = plays && Math.round((loses / plays) * 100) || 0;

                newStat[pair] = {
                    pair,
                    plays,
                    wins,
                    loses,
                    winrate1st,
                    winrate2nd
                };

                if (!newStat[reversedPair]) {
                    newStat[reversedPair] = {
                        pair: reversedPair,
                        plays,
                        wins: loses,
                        loses: wins,
                        winrate1st: winrate2nd,
                        winrate2nd: winrate1st
                    };
                }
            }

        });

        let csvFile = `pair;plays;wins;loses;winrate1st;winrate2nd;`;

        Object.keys(newStat).forEach(key => {
            let o = newStat[key];

            csvFile+=`\n${o.pair};${o.plays};${o.wins};${o.loses};${o.winrate1st};${o.winrate2nd};`;
        });

        return { csvFile, newStat };
    }

    getWeeklyPairsWithWinsStat () {
        const db = this.openDBConnection();
        const { getWeeklyPairsWithWinsStat } = proceduresSchema;

        return new Promise(resolve => {
            db.all(getWeeklyPairsWithWinsStat(), [], (err, rows) => {
                if (err) {
                    throw err;
                }

                const { csvFile, newStat } = this._groupUniquePairs(rows);

                fs.writeFile(`weeklyForWord.csv`, csvFile, 'utf8', (err) => {
                    if (err) {
                        console.error(err);
                    }
                });

                resolve(newStat);
            });
        })
    }

    getAllPairsWithWinsStat () {
        const db = this.openDBConnection();
        const { getAllPairsWithWinsStat } = proceduresSchema;

        return new Promise(resolve => {
            db.all(getAllPairsWithWinsStat(), [], (err, rows) => {
                if (err) {
                    throw err;
                }

                const { csvFile, newStat } = this._groupUniquePairs(rows);

                fs.writeFile(`forWord.csv`, csvFile, 'utf8', (err) => {
                    if (err) {
                        console.error(err);
                    }
                });

                resolve(newStat);
            });
        })
    }

}

module.exports = DBConnector;