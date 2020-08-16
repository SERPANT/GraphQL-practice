const { nodeEnv } = require('./util');
console.log(`Running in ${nodeEnv} mode...`);

const app = require('express')();

const pg = require('pg');
const pgConfig = require('../config/pg')['development'];
const pgPool = new pg.Pool(pgConfig);

const newSchema =  require('../schema');
const {graphqlHTTP}  = require('express-graphql');

app.use('/graphql',graphqlHTTP({
    schema: newSchema, 
    graphiql: true,
    context: {
        pgPool
    }
}));

const port = process.env.PORT || 3000;
app.listen(port, () => {console.log('Server started')});




