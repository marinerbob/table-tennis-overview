const express = require('express');
const app = express();
const DB_PATH = '../db/tnnsDB.db'; // move to .env
const DBConnector = require('./dto/dbConnector');

let dbConn = new DBConnector(DB_PATH);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) =>{
    dbConn.getAllPlayers().then(data => {
        res.send(JSON.stringify(data));
        dbConn.closeDBConnection();
    }).catch(err => console.error(err));
});

app.get('/pairs', (req, res) => {
    dbConn.getAllPairsWithWinsStat().then(data => {
        res.send(JSON.stringify(data));
        dbConn.closeDBConnection();
    }).catch(err => console.error(err));
});

app.get('/weekly-pairs', (req, res) => {
    dbConn.getWeeklyPairsWithWinsStat().then(data => {
        res.send(JSON.stringify(data));
        dbConn.closeDBConnection();
    }).catch(err => console.error(err));
})

app.listen(3000);