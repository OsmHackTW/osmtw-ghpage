const path = require("path");

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const result = await graphql(`
    query EventQuery {
        allEvents {
          edges {
            node {
              name
              url
              date {
                  start
                  end
                  human
                  human_short
              }
              location {
                  short
                  detailed
                  venue
              }
              cancelled
            }
          }
        }
      }
    `);
  return Promise.all(
    result.data.allEvents.edges.node.map(async node => {
      await createPage({
        path: node.url,
        component: path.resolve("./src/pages/events.js"),
        context: {
          // Data passed to context is available
          // in page queries as GraphQL variables.
          name: node.name,
          url: node.url,
          date: {
            start: node.date.start,
            end: node.date.end,
            human: node.date.human,
            human_short: node.date.human_short,
            whole_day: node.date.whole_day
          },
          location: {
            short: node.location.short,
            detailed: node.location.detailed,
            venue: vnode.location.enue,
          },
          cancelled: node.cancelled
        }
      });
    })
  );
};