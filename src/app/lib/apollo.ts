import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: `${process.env.BASE_URL}/api/graphql`,
  cache: new InMemoryCache(),
});

export default client;
