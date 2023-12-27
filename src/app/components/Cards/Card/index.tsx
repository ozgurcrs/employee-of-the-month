"use client";
import { FC } from "react";
import {
  ActionButton,
  CardContainer,
  Details,
  EmployeeCard,
  Medal,
  Score,
} from "./style";
import { FiPlus } from "react-icons/fi";
import Image from "next/image";
import Link from "next/link";
import { FaMedal } from "react-icons/fa6";
import { Employee } from "@/app/types/employee";

type Props = {
  employee: Employee;
  isLeader: boolean;
  handleVote: (id: number) => void;
};

export const Card: FC<Props> = ({ employee, isLeader, handleVote }) => {
  const { voteCount, firstName, lastName, title, id, image } = employee;

  return (
    <EmployeeCard>
      <Link href={`/details/${encodeURIComponent(id)}`}>
        <Image src={image} width={0} height={0} sizes="100vw" alt="" />
        <CardContainer>
          {isLeader && (
            <Medal>
              <FaMedal />
            </Medal>
          )}
          <Score>{voteCount}</Score>
          <Details>
            <span>{`${firstName} ${lastName}`}</span>
            <span>{title}</span>
          </Details>
        </CardContainer>
      </Link>

      <ActionButton onClick={() => handleVote(id)} className="action-button">
        <FiPlus />
      </ActionButton>
    </EmployeeCard>
  );
};
