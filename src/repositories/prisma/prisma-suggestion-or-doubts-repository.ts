import { prisma } from "../../lib/prisma";
import { SuggestionOrDoubtsProps, SuggestionOrDoubtsRepository } from "../suggestion-or-doubts-repository";

export class PrismaSuggestionOrDoubtsRepository implements SuggestionOrDoubtsRepository {
   async create(data: SuggestionOrDoubtsProps) {
      await prisma.suggestion_or_doubt.create({
         data: {
            content_name: data.content_name,
            name: data.name,
            email: data.email,
            file: data.file,
            message: data.message,
            relationType: data.relationType
         }
      })
   }

   async getAll() {
      const data = await prisma.suggestion_or_doubt.findMany()
      return data
   }
}