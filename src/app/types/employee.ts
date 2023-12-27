export interface Employee {
  id: number;
  firstName: string;
  lastName: string;
  title: string;
  voteCount: number;
  image: string;
  email?: string;
  phone?: string;
  address?: string;
}

export type ApiResponse = {
  data: {
    employees: Employee[];
  };
  loading: boolean;
  networkStatus: number;
};
