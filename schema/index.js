const {GraphQLSchema, GraphQLObjectType, GraphQLString, GraphQLNonNull } = require('graphql');
const meType = require('./type/me')

const pgdb = require('../database/pgdb');

const RootQueryType = new GraphQLObjectType({
    name : 'RootQueryType',
    fields:{
        me: {
            description: '**This is a hello documentation**',
            type: meType,
            args: {
                key: {type: new GraphQLNonNull (GraphQLString)}
            },
            resolve: (parent, args, ctx) => {
                return pgdb(ctx.pgPool).getUserFromAPIKey(args.key);
            } 
           }
    }
});



const newSchema = new GraphQLSchema({
    query: RootQueryType
});

module.exports = newSchema;