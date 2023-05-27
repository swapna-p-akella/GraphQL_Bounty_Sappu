const { ApolloServer } = require("apollo-server");
const { importSchema } = require("graphql-import");
const EtherDataSource = require("./datasource/ethDatasource");
const typeDefs = importSchema("./schema.graphql");

require("dotenv").config();

const resolvers = {
  Query: {
    getEthByAddress: async (root, _args, { dataSources }) => {
      const response = await dataSources.ethDataSource.etherBalanceByAddress();
      return {
        status: response.status,
        result: response.result,
      };
    },
    getTotalSupplyEth: async (root, _args, { dataSources }) => {
      const response = await dataSources.ethDataSource.totalSupplyOfEther();
      return {
        status: response.status,
        message: response.message,
        result: response.result,
      };
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => ({
    ethDataSource: new EtherDataSource(),
  }),
});

server.timeout = 0;
server.listen("9000").then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
