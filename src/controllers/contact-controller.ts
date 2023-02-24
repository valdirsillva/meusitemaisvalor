import { NextFunction, Request, Response } from 'express'
import { StatusCodes } from 'http-status-codes'
import { PrismaContactRepository } from '../repositories/prisma/prisma-contact-repository'

const contactRepository = new PrismaContactRepository()

const getContacts = async (_: Request, res: Response, next: NextFunction) => {
  try {
    const data = await contactRepository.getAll()
    res.status(StatusCodes.OK).send(data)
  } catch(err) {
    next(err)
  }
}

const createContact = async (req: Request, res: Response, next: NextFunction) => {
  const { name, email, phoneNumber, message } = req.body
  try {
      if (name === '' || email === '' || phoneNumber === '') {
          throw new Error('Nome, email e telefone são obrigatórios.')
      }
      
      await contactRepository.create({
          name, 
          email, 
          phoneNumber, 
          message, 
          created_at: new Date()
      })
      res.status(201).send({ success: 'Contato salvo com sucesso!'})
  } catch (error) {
      next(error)
  }
}

export default { getContacts, createContact}