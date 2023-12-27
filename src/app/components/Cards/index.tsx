"use client";
import { useEvents } from "@/app/hooks/useEvent";
import { Employee } from "@/app/types/employee";
import { FC, useMemo, useState } from "react";
import { EmployeeCards } from "./style";
import { Card } from "./Card";

type Props = {
  employeeList: Employee[];
};

export const Cards: FC<Props> = ({ employeeList }) => {
  const { sendEvent } = useEvents();
  const [allEmployees, setAllEmployees] = useState<Employee[]>(employeeList);

  const handleVote = (id: number) => {
    setAllEmployees((prevEmployeeList: Employee[]) => {
      return prevEmployeeList.map((employee: Employee) =>
        employee.id === id
          ? { ...employee, voteCount: employee.voteCount + 1 }
          : employee
      );
    });

    sendEvent("VOTED_EMPLOYEE", id);
  };

  const sortedEmployees = useMemo(
    () => [...allEmployees].sort((a, b) => b.voteCount - a.voteCount),
    [allEmployees]
  );

  return (
    <EmployeeCards>
      {sortedEmployees.map((item: Employee, index: number) => {
        return (
          <Card
            key={index}
            employee={item}
            isLeader={index === 0}
            handleVote={handleVote}
          />
        );
      })}
    </EmployeeCards>
  );
};
