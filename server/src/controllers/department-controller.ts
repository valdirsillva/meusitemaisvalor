import { StatusCodes } from 'http-status-codes'
import { Request, Response, NextFunction} from 'express'
import { PrismaDepartmentsRepository } from '../repositories/prisma/prisma-departments-repository'

const departmentsRepository = new PrismaDepartmentsRepository()

const getDepartments = async (_: Request, res: Response, next: NextFunction) => {
  try {
    const departments = await departmentsRepository.getAll()
    res.status(StatusCodes.OK).send(departments)
  } catch(error) {
    next(error)
  }
}

const createDepartment =  async (req: Request, res: Response, next: NextFunction) => {
  const {name, email, phoneNumber} = req.body
  try {
    if (!name || !email) {
       throw new Error("O departamento e email devem ser preenchidos.")
    }

    const department = await departmentsRepository.create({name, email, phoneNumber})
    res.status(StatusCodes.CREATED).send(department)
  } catch(error) {
    next(error)
  }
} 

const editDepartment = async (req: Request, res: Response, next: NextFunction) => {
  const id = parseInt(req.params.id) 
  const { name, email, phoneNumber} = req.body

  try {
    await departmentsRepository.update({
      id,name, email, phoneNumber
    })

    res.status(StatusCodes.OK).send({ message: "O departamento foi atualizado"})
  } catch(error) {
    next(error)
  }
}

export default { getDepartments, createDepartment, editDepartment }