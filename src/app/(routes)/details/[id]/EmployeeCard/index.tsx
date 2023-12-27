"use client";
import { DetailCard } from "@/app/components/DetailCard";
import { Employee } from "@/app/types/employee";
import { FC } from "react";
import { CardContainer } from "./style";

type Props = {
  employee: Employee;
};

export const EmployeeCard: FC<Props> = ({ employee }) => {
  return (
    <CardContainer>
      <DetailCard employee={employee} />
    </CardContainer>
  );
};
