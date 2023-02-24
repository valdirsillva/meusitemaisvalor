export interface CandidateProps {
   name: string;
   gender: string;
   phone: string;
   email: string;
   city: string;
   state: string;
   area: string;
   has_file: string | null;
   comment: string;
}

export interface CandidateRepository {
  create: (data: CandidateProps) => Promise<void>;
  getAll: () => Promise<{} | null>;
}

