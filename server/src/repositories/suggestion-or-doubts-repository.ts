export interface SuggestionOrDoubtsProps {
  content_name: string;
  relationType: string;
  name: string;
  email: string;
  file?: string;
  message: string;
}

export interface SuggestionOrDoubtsRepository {
  create: (data: SuggestionOrDoubtsProps) => Promise<void>;
  getAll: () => Promise<{} | null>
}
