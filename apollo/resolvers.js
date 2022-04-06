const generateRandomString = require("../utils/generateRandomString");

// Provide resolver functions for your schema fields
const resolvers = {
  Query: {
    hello: (root, args, context) => "Hello world!",
    async link(root, { id }, { models }) {
      return models.Link.findByPk(id);
    },
    async allLinks(root, args, { models }) {
      return models.Link.findAll();
    }
  },
  Mutation: {
    async createLink(root, { url, slug }, { models }) {
      const randomHash = generateRandomString();
      let slugToUse = "";

      if (slug) {
        // hardcode implementation
        const slugExists = true;
        if (slugExists) {
          slugToUse = randomHash;
        } else {
          slugToUse = slug;
        }
      } else {
        slugToUse = randomHash;
      }

      return models.Link.create({
        url,
        slug: slugToUse
      });
    }
  }
};

module.exports = resolvers;
