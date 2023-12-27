import { FC } from "react";
import { Employee } from "@/app/types/employee";
import { Details, EmployeeCard, DetailContainer, EmployeeInfo } from "./style";
import Image from "next/image";

type Props = {
  employee: Employee;
};

export const DetailCard: FC<Props> = ({ employee }) => {
  const { firstName, lastName, address, email, phone, title, image } = employee;

  return (
    <DetailContainer>
      <EmployeeCard>
        <Image src={image} width={0} height={0} sizes="100vw" alt="" />
        <Details>
          <span>{`${firstName} ${lastName}`}</span>
          <span>{title}</span>
        </Details>
      </EmployeeCard>
      <EmployeeInfo className="employee-info">
        <span>Email:{email}</span>
        <span>Address:{address}</span>
        <span>Phone: {phone}</span>
      </EmployeeInfo>
    </DetailContainer>
  );
};
