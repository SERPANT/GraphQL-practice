const { GraphQLObjectType,
     GraphQLString,
      GraphQLID, 
      GraphQLNonNull, 
      GraphQLList} = require('graphql');

const contest = require('../type/contest');
const pgdb = require('../../database/pgdb');

const meType = new GraphQLObjectType({
    name: 'MeType',
    fields: {
        id: {
            type: GraphQLID
        },
        email:{
            type: new GraphQLNonNull(GraphQLString)
        },
        firstName: {
            type: new GraphQLNonNull(GraphQLString)
        },
        lastName:{
            type: new GraphQLNonNull(GraphQLString)
        },
        contests:{
            type: new GraphQLList(contest),
            resolve: (obj, args, ctx) => {
                return pgdb(ctx.pgPool).getAllContest(obj);
            }
        }
    }
})

module.exports = meType;