const { GraphQLObjectType, GraphQLString, GraphQLID, GraphQLNonNull} = require('graphql');

const ContestStatusType = require('./contest-status');

module.exports = new GraphQLObjectType({
    name: 'contestType',
    fields:{
        id: {type: GraphQLID},
        code:{
            type: GraphQLString
        },
        title:{
            type: GraphQLString
        },
        description:{
            type: GraphQLString
        },
        status: {
            type: new GraphQLNonNull(ContestStatusType)
        }
    }
})