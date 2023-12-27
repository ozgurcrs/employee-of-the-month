import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";
import fetchPonyfill from "fetch-ponyfill";

const httpLink = new HttpLink({
  fetch: fetchPonyfill().fetch,
  uri: `http://127.0.0.1:3000/api/graphql`,
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

export default client;
