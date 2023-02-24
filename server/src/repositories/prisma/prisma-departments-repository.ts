import { prisma } from "../../lib/prisma";
import { DepartmentsProps, DepartmentsRepository } from "../departments-repository";

export class PrismaDepartmentsRepository implements DepartmentsRepository {
  async create({id, name, email, phoneNumber}: DepartmentsProps)  {
    await prisma.department.create({
      data:{
        id,
        name,
        email,
        phoneNumber 
      }
    })
  }

  async getAll(): Promise<{} | null>{
    const departments = await prisma.department.findMany()

    return departments;
  }

  async update(data: DepartmentsProps) {
    await prisma.department.update({
      where: {
        id: data.id
      },
      data: {
        name: data.email,
        email: data.email,
        phoneNumber: data.phoneNumber
      }
    })
  }

  async findOne(id: number) {
    const obj = await prisma.department.findUnique({
      where: {
        id: id
      },

      select: {
        name: true,
        email: true
      },
    })

    return { name: obj?.name, email: obj?.email};
  }
}