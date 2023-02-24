export interface ContactProps {
    name: string;
    email: string;
    phoneNumber: string;
    message: string;
    created_at: Date
}

export interface ContactRepository {
    create: (data: ContactProps) => Promise<void>;
    getAll: () => Promise<{} | null>;
}

