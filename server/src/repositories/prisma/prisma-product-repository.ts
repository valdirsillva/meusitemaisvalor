import { prisma } from "../../lib/prisma";
import { ProductProps, ProductRepository } from "../product-repository";

export default class PrismaProductRepository implements ProductRepository {
  async create({ name }: ProductProps) {
    await prisma.product.create({
      data: {
        name
      }
    })
  }
  
  async getAll() {
    const products = await prisma.product.findMany()

    return { products }
  }

  async update(data: ProductProps){
    const product = await prisma.product.update({
      where: {
        id: data.id
      },
      data: {
        name: data.name
      }
    })
    return { product }
  }

  async delete(data: number) {
    await prisma.product.delete({
      where: { id: data },
    })
  }
}