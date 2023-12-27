import { render } from "@testing-library/react";
import { Employee } from "@/app/types/employee";
import { DetailCard } from ".";

const mockEmployee: Employee = {
  firstName: "John",
  lastName: "Doe",
  address: "123 Main St",
  email: "john.doe@example.com",
  phone: "555-1234",
  title: "Software Engineer",
  image: "/path/to/image.jpg",
  id: 0,
  voteCount: 0,
};

test("renders employee details correctly", () => {
  // Render the component with the mock data
  const { getByText } = render(<DetailCard employee={mockEmployee} />);

  // Check if the rendered content matches the employee details
  expect(
    getByText(`${mockEmployee.firstName} ${mockEmployee.lastName}`)
  ).toBeDefined();
  expect(getByText(mockEmployee.title)).toBeDefined();
  expect(getByText(`Email:${mockEmployee.email}`)).toBeDefined();
  expect(getByText(`Address:${mockEmployee.address}`)).toBeDefined();
  expect(getByText(`Phone: ${mockEmployee.phone}`)).toBeDefined();
});
