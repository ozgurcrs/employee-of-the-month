import { GET_EMPLOYEE } from "@/app/queries";
import client from "@/app/lib/apollo";
import { EmployeeCard } from "./EmployeeCard";

export default async function Page({ params }: any) {
  const id = Number(params.id);

  const data = await client.query({
    query: GET_EMPLOYEE,
    variables: {
      id: id,
    },
  });

  const { employee } = data?.data;

  return employee && <EmployeeCard employee={employee} />;
}
