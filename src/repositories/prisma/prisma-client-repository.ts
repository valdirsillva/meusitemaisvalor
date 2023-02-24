import { prisma } from "../../lib/prisma";
import { ClientProps, ClientRepository } from "../client-repository";

export default class PrismaClientRepository implements ClientRepository {
  async create(data: ClientProps): Promise<{}> {
    const { product } = await prisma.client.create({
      data: {
        name: data.name,
        email: data.email,
        phone: data.phone,
        cpf: data.cpf,
        created_at: new Date(),

        product: {
          connect: {
            id: data.productId
          },
        },
      },

      include: {
        product: {
          select: {
            name: true
          }
        }
      }
    })

    return product.name
  }
  
  async getAll() {
    const clients =  await prisma.client.findMany()

    return { clients }
  }
  
}