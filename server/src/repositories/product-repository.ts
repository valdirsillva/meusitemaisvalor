export interface ProductProps {
  id?: number;
  name: string;
}

export interface ProductRepository {
  create: (data: ProductProps) => Promise<void>;
  getAll: () => Promise<{} | null>;
  update: (data: ProductProps) => Promise<{} | null>
  delete: (data: number) => Promise<void>;
}

