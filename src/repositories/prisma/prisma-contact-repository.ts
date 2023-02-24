import { prisma } from "../../lib/prisma";
import { ContactProps, ContactRepository } from "../contact-repository";

export class PrismaContactRepository implements ContactRepository {
    async create({ name, email, phoneNumber, message, created_at }: ContactProps): Promise<void> {
        await prisma.contact.create({
            data: {
                name,
                email,
                phoneNumber,
                created_at: new Date(),
                message,
            }
        })
    }

    async getAll(): Promise<{} | null> {
        const contacts = await prisma.contact.findMany()

        return contacts;
    }
}

