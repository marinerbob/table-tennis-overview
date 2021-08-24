//import playerSchema from 'server/src/schemas/player.js';
//import matchSchema from 'server/src/schemas/match.js';

class PlayersController {
    constructor(knexDBConnector) {
        this.knexDB = knexDBConnector.db;
        this.playersTable = this.knexDB('players');
        this.matchesTable = this.knexDB('matches');
    }

    async getAllPlayers() {
        try {
            let result = await this.playersTable
            .select('id', 'login').orderBy('id');

            return result;
        } catch (error) {
            throw error;
        }
    }

    async getAllStatsForPlayers() {
        try {
            let overall = this.knexDB({ m: 'matches' })
            .count('m.id').whereRaw('p.id = m.winner_id')
            .orWhereRaw('p.id = m.loser_id').as('overall');

            let wins = this.knexDB({ m: 'matches' })
            .count('m.id').whereRaw('p.id = m.winner_id')
            .as('wins');

            let loses = this.knexDB({ m: 'matches' })
            .count('m.id').whereRaw('p.id = m.loser_id')
            .as('loses');

            let result = await this.knexDB({ p: 'players' })
            .select('p.id', 'p.login', overall, wins, loses)
            .orderBy('overall', 'desc');

            return result;
        } catch (error) {
            throw error;
        }
    }

    async getAllCompetitorsByPlayerId(playerId) {
        try {
            let overall = this.knexDB({ m: 'matches' })
            .count('m.id')
            .where(function () {
                this.whereRaw('p1.id = m.loser_id')
                .andWhereRaw('p.id = m.winner_id')
            })
            .orWhere(function () {
                this.whereRaw('p.id = m.loser_id')
                .andWhereRaw('p1.id = m.winner_id')
            }).as('overall');

            let wins = this.knexDB({ m: 'matches' })
            .count('m.id')
            .whereRaw('p.id = m.winner_id')
            .andWhereRaw('p1.id = m.loser_id')
            .as('wins');

            let loses = this.knexDB({ m: 'matches' })
            .count('m.id')
            .whereRaw('p.id = m.loser_id')
            .andWhereRaw('p1.id = m.winner_id')
            .as('loses');

            let result = await this.knexDB({ p: 'players' })
            .join({ p1: 'players' }, 'p.id', '<>', 'p1.id')
            .select({ competitor: 'p1.login' }, overall, wins, loses)
            .whereRaw('p.id = ?', playerId)
            .andWhere('overall', '>', 0)
            .orderBy('overall', 'desc');

            return result;
        } catch (error) {
            throw error;
        }
    }

}

export default PlayersController;
