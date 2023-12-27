import gql from "graphql-tag";

export const GET_EMPLOYEES = gql`
  query {
    employees {
      id
      firstName
      lastName
      title
      voteCount
      image
    }
  }
`;

export const GET_EMPLOYEE = gql`
  query GetEmployee($id: Int!) {
    employee(id: $id) {
      id
      firstName
      lastName
      title
      voteCount
      image
      email
      address
      phone
    }
  }
`;
