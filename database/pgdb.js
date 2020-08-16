const humps = require('humps');

module.exports = pgdb = (pgPool) => {
    return {
        getUserFromAPIKey(apiKey)
        {
            return pgPool.query('Select * From users Where api_key = $1', [apiKey]).then(res => { 
                return humps.camelizeKeys(res.rows[0]);
            });
        },

        getAllContest(obj)
        {
            return pgPool.query('Select * from contests Where created_by = $1', [obj.id]).then(res => {
                return humps.camelizeKeys(res.rows);
            })
        }
    }
}