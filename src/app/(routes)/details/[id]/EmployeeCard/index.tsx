"use client";
import { DetailCard } from "@/app/components/Cards/DetailCard";
import { CardContainer } from "../../style";
import { Employee } from "@/app/types/employee";
import { FC } from "react";

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
