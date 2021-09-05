//import playerSchema from 'server/src/schemas/player.js';
//import matchSchema from 'server/src/schemas/match.js';

class MatchesController {
    constructor(knexDBConnector) {
        this.knexDB = knexDBConnector.db;
        this.playersTable = this.knexDB('players');
        this.matchesTable = this.knexDB('matches');
    }

    get allMatches() {
        return this.knexDB({ m: 'matches' })
        .join({ p1: 'players' }, 'p1.id', '=', 'm.winner_id')
        .join({ p2: 'players' }, 'p2.id', '=', 'm.loser_id')
        .select({ id: 'm.id', winner: 'p1.login', loser: 'p2.login', wscore: 'm.winner_score',
         lscore: 'm.loser_score', mdate: 'm.match_date', mtype: 'match_type' });
    }

    async getAllMatches() {
        try {
            let result = await this.allMatches;
             return result;
        } catch (error) {
            throw error;
        }
    }

    async getAllMonthMatches() {
        try {
            let result = await this.allMatches
            .whereRaw(`date(mdate) > date('now', '-1 month')`);
             return result;
        } catch (error) {
            throw error;
        }
    }

    async getAllWeekMatchesByPlayerId(playerId) {
        try {
            return (await this.allMatches
                .where('m.winner_id', '=', playerId)
                .orWhere('m.loser_id', '=', playerId)
                .andWhereRaw(`date(mdate) > date('now', '-7 day')`));
        } catch (error) {
            throw error;
        }
    }

    async getAllMatchesByPlayerId(playerId) {
        try {
            return (await this.allMatches.whereRaw('m.winner_id = ?', playerId).orWhereRaw('m.loser_id = ?', playerId));
        } catch (error) {
            throw error;
        }
    }

    async getWeekMatches() {
        try {
            return (await this.allMatches.whereRaw(`date(mdate) > date('now', '-7 day')`));
        } catch (error) {
            throw error;
        }
    }

    async getAllMonthsMatchesStat() {
        try {
            let result = await this.knexDB({ m: 'matches' })
            .select(this.knexDB.raw(`strftime('%Y-%m', m.match_date) as month, count(m.id) as matches_count`))
            .groupBy('month');

            return result;
        } catch (error) {
            throw error;
        }
    }

    async getAllZeroMatches() {
        try {
            return (await this.allMatches.where('m.loser_score', '=', 0));
        } catch (error) {
            throw error;
        }
    }

    async getAllMaxScoreMatches() {
        try {
            return (await this.allMatches.max('m.winner_score as max_score'));
        } catch (error) {
            throw error;
        }
    }
}

export default MatchesController;
