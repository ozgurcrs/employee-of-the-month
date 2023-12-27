import { Cards } from "./components/Cards";
import { GET_EMPLOYEES } from "./queries";
import { ApiResponse, Employee } from "./types/employee";
import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: `http://localhost:3000/api/graphql`,
  cache: new InMemoryCache(),
});

export default async function Home() {
  const data: ApiResponse = await client.query({
    query: GET_EMPLOYEES,
  });

  const { employees }: { employees: Employee[] } = data.data;

  return (
    <main>{data.loading ? "Loading" : <Cards employeeList={employees} />}</main>
  );
}
