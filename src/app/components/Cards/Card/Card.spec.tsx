import { render, screen, fireEvent } from "@testing-library/react";
import { Card } from "./";
import { Employee } from "@/app/types/employee";

const mockEmployee: Employee = {
  id: 1,
  firstName: "John",
  lastName: "Doe",
  title: "Software Engineer",
  voteCount: 5,
  image: "/path/to/image.jpg",
};

test("renders Card component correctly", () => {
  render(
    <Card employee={mockEmployee} isLeader={false} handleVote={() => {}} />
  );

  expect(screen.getByText("John Doe")).toBeDefined();
  expect(screen.getByText("Software Engineer")).toBeDefined();
  expect(screen.getByText("5")).toBeDefined();
  expect(screen.queryByTestId("medal")).toBeNull();

  expect(screen.getByTestId("action-button")).toBeDefined();
});

test("renders Card component correctly for leader", () => {
  render(
    <Card employee={mockEmployee} isLeader={true} handleVote={() => {}} />
  );

  expect(screen.getByTestId("medal")).toBeDefined();

  expect(screen.getByTestId("action-button")).toBeDefined();
});

test("handles vote click", () => {
  const handleVoteMock = jest.fn();

  render(
    <Card
      employee={mockEmployee}
      isLeader={false}
      handleVote={handleVoteMock}
    />
  );

  fireEvent.click(screen.getByTestId("action-button"));

  expect(handleVoteMock).toHaveBeenCalledWith(1);
});
