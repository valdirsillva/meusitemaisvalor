export interface DepartmentsProps {
  id?: number;
  name: string;
  email: string;
  phoneNumber: string;
}

export interface DepartmentsRepository {
  create: (data: DepartmentsProps) => Promise<void>;
  getAll: () => Promise<{} | null>;
  update: (data: DepartmentsProps) => Promise<void>
  findOne: (id: number) => Promise<{} | null>
}
