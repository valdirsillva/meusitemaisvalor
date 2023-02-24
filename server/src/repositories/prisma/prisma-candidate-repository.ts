import { prisma } from "../../lib/prisma";
import { CandidateProps, CandidateRepository } from "../candidate-repository";

export default class PrismaCandidateRepository implements CandidateRepository {
  async create({name, gender, phone, email, city, state, area, has_file, comment}: CandidateProps) {
     await prisma.candidate.create({
        data: {
         name,
         gender,
         phone,
         email,
         city,
         state,
         area,
         has_file,
         comment
        }
     })
  }
  
  async getAll() {
     const candidates = await prisma.candidate.findMany()

     return candidates;
  }
  
}