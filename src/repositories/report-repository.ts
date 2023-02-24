export interface ReportProps {
  fullname?: string | undefined;
  email?: string | undefined;
  phone?: string | undefined;
  details?: string | undefined;
  has_witnesses?: string | undefined;
  evidence_of_facts?: string;
  has_balance?: string | undefined;
  suggestion?: string | undefined;
  has_file?: string | undefined;
  
  channelID: number | undefined;
  isManagerAware: boolean;
  isManagerInvolved: boolean;

  relationID: number;
  relationTypeID: number;
  branchID: number;
  factAwareID: number; 
}

export interface ReportDataProps {
  name: string;
  email: string;
  phone: string;
  mailTo: string;
  has_file?: string;
  typeRelation: string;
  relation: string;
  branchText: string;
  channelName: string;
  factText: string;
  isManagerAware: boolean;
  isManagerInvolved: boolean;
  details: string;
  has_witnesses: string;
  evidence_of_facts: string;
  has_balance: string;
  suggestion: string;
}


export type ReportDataType = Array<ReportDataProps>

export interface ReportRepository {
  create: (data: ReportProps) => Promise<{} | null>;
  getAll: () => Promise<{} | null>

  // Lista tipos de relato
  getRelationsTypes: () => Promise<{} | null>
  
  // Lista de relação com a empresa
  getRelationsCompany: () => Promise<{} | null>

  // Lista filiais da organização
  getBranchesCompany: () => Promise<{} | null>

  // Lista os fatos
  getFactsAwares: () => Promise<{} | null>

  findReportUnique: (id: number) => Promise<{} | null>
}
