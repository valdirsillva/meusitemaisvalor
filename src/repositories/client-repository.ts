export interface ClientProps {
  id?: number;
  name: string;
  email: string;
  phone: string;
  cpf: string;
  created_at: Date

  productId?: number;
}

export interface ClientRepository {
  create: (data: ClientProps) => Promise<{}>;
  getAll: () => Promise<{} | null>;
}

