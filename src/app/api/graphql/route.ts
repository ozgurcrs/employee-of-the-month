import { startServerAndCreateNextHandler } from "@as-integrations/next";
import { ApolloServer } from "@apollo/server";
import { NextRequest } from "next/server";
import { gql } from "graphql-tag";
import { employees } from "@/app/mock";

const typeDefs = gql`
  type Employee {
    id: Int
    firstName: String
    lastName: String
    title: String
    voteCount: Int
    image: String
    email: String
    address: String
    phone: String
  }

  type Query {
    employees: [Employee]
    employee(id: Int!): Employee
  }
`;

const resolvers = {
  Query: {
    employees: () => employees,
    employee: (_: any, { id }: any) =>
      employees.find((employee) => employee.id === id),
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const handler = startServerAndCreateNextHandler<NextRequest>(server, {
  context: async (req) => ({ req }),
});

export { handler as GET, handler as POST };
