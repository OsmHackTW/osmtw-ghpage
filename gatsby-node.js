const path = require("path");

// using Gatsby Type Builder API
exports.createSchemaCustomization = ({ actions, schema }) => {
    const { createTypes } = actions
    const typeDefs = [
        schema.buildObjectType({
            name: 'Events',
            extensions: {
                infer: false,
            },
            fields: {
                name: 'String!',
                location: {
                    type: 'Location',
                    extensions: {
                        link: {},
                    },
                },
                date: {
                    type: 'PointInTime',
                    extensions: {
                        dateformat: {},
                    },
                },
                cancelled: 'Boolean!',
                url: 'String!',
            }
        }),
        schema.buildObjectType({
            name: 'PointInTime',
            extensions: {
                infer: false,
            },
            fields: {
                human: 'String!',
                human_short: 'String!',
                start: {
                    type: 'Date!',
                    extensions: {
                        dateformat: {
                            locale: 'zh',
                        },
                    },
                },
                end: {
                    type: 'Date!',
                    extensions: {
                        dateformat: {
                            locale: 'zh',
                        },
                    },
                },
            },
            interfaces: ['Node'],
        }),
        schema.buildObjectType({
            name: 'Location',
            extensions: {
                infer: false,
            },
            fields: {
                short: 'String!',
                detailed: 'String!',
                venue: 'String!',
            },
            interfaces: ['Node'],
        }),
    ]
    createTypes(typeDefs)
}
