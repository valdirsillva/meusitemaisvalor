import { prisma } from "../../lib/prisma";
import { ReportDataType, ReportDataProps, ReportProps, ReportRepository } from "../report-repository";

export default class PrismaReportRepository implements ReportRepository {
  async create(data: ReportProps) {
     const report = await prisma.report.create({
         data: {
            fullname: data.fullname,
            email: data.email,
            phone: data.phone,
            details: data.details,
            has_witnesses: data.has_witnesses,
            evidence_of_facts: data.evidence_of_facts,
            has_balance: data.has_balance,
            suggestion: data.suggestion,
            has_file: data.has_file,

            branch: {
               connect: {
                  id: data.branchID
               },
            },

            relation: {
               connect: {
                  id: data.relationID
               },
            },

            relationType: {
               connect: {
                  id: data.relationTypeID
               },
            },

            fact: {
               connect: {
                  id: data.factAwareID
               },
            },
            channel: {
               connect: {
                  id: data.channelID
               }
            },
            
            // channelID: data.channelID,
            isManagerAware: data.isManagerAware,
            isManagerInvolved: data.isManagerInvolved,
         },

         select: {
            relationTypeID: true,
            id: true
         }
     })

    return report.id
  }

  async getAll() {
    const reports = await prisma.report.findMany()
    return reports;
  }

  async getRelationsTypes() {
   const relationsTypes = await prisma.relationType.findMany()

   return relationsTypes
  }

  async getRelationsCompany() {
   const data = await prisma.relation.findMany()

   return data
  }

  async getBranchesCompany() {
   const data = await prisma.branch.findMany()
    
   return data
  }

  async getFactsAwares() {
   const data = await prisma.factAware.findMany()

   return data
  }

  async findReportUnique(id: number): Promise<ReportDataType> {
      const report: ReportDataProps[] = await prisma.$queryRaw<ReportDataProps[]>`
         SELECT  
            T1.fullname 'name', 
            T1.email 'email', 
            T1.phone 'phone',
            T7.email mailTo, 
            T1.has_file,
            T2.typeRelation , 
            T3.relation, 
            T4.branchText,
            T6.channelName,
            T5.factText,
            T1.isManagerAware,
            T1.isManagerInvolved,
            T1.details, 
            T1.has_witnesses,
            T1.evidence_of_facts,
            T1.has_balance,
            T1.suggestion
         FROM reports T1
            INNER JOIN relations T2 ON T2.id = T1.relationID
            INNER JOIN relationstypes T3 ON T3.id = T1.relationTypeID
            INNER JOIN branchs T4 ON T4.id = T1.branchID
            INNER JOIN factsAware T5 ON T5.id = T1.factAwareID
            INNER JOIN channel T6 ON T6.id = T1.channelID
            LEFT JOIN departments T7 ON T7.id = T3.departmentId
         WHERE 
            T1.id = ${id}
      `
   
      return report
  }
}