import { Cards } from "./components/Cards";
import client from "./lib/apollo";
import { GET_EMPLOYEES } from "./queries";
import { ApiResponse, Employee } from "./types/employee";

export default async function Home() {
  const data: ApiResponse = await client.query({
    query: GET_EMPLOYEES,
  });

  const { employees }: { employees: Employee[] } = data.data;

  return (
    <main>{data.loading ? "Loading" : <Cards employeeList={employees} />}</main>
  );
}
