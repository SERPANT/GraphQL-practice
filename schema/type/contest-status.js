const {GraphQLEnumType} = require('graphql');

const contestStatus = new GraphQLEnumType({
    name: 'ContestStatusType',
    values: {
        DRAFT: {value: 'draft'},
        PUBLISHED: { value: 'published'},
        ARCHIVED: {value: 'archived'}
    }
})
module.exports = contestStatus;