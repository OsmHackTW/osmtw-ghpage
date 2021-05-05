const path = require("path");

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions
  const typeDefs = `
    type events implements Node @dontInfer {
      date: Dates
      location: Location
    }
    type Dates{
      start: Date
      end: Date
      human: String!
      human_short: String!
    }
    type Location {
      short: String!
      detailed: String!
      venue: String!
    }
  `
  createTypes(typeDefs)
}