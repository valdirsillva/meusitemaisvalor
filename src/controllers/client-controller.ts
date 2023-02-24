import { StatusCodes } from 'http-status-codes'
import { NextFunction, Request, Response } from 'express'
import PrismaClientRepository from '../repositories/prisma/prisma-client-repository'
import { NodemailerMailAdapter } from '../adapters/nodemailer/nodemailer-mail-adapter'

const clientRepository = new PrismaClientRepository()

const getClients = async (_: Request, res: Response, next: NextFunction) => {
  try {
    const data = await clientRepository.getAll()
    res.status(StatusCodes.OK).send(data)
  } catch(err) {
    next(err)
  }
}

const addClient = async (req: Request, res: Response, next: NextFunction) => {
  const { name, email, phone, cpf, productId  } = req.body
  try {
      if (cpf === '' || productId === '') {
         throw new Error('CPF é obrigatório.')
      }

      if (name === '' || email === '' || phone === '') {
          throw new Error('Nome, email e telefone são obrigatórios.')
      }
      
      const product = await clientRepository.create({ name, email, phone, cpf, productId, created_at: new Date() })

      const testNodemailerAdapter = new NodemailerMailAdapter()

      await testNodemailerAdapter.sendMail({
        subject: `FORMULARIO SITE - ${product}`,
        body: [
          `<div style="font-family sans-serif. font-size:16px; color: #222;">`,
          `<p><b>Nome:</b> ${name}</p>`,
          `<p><b>E-mail:</b> ${email}</p>`,
          `<p><b>Telefone:</b> ${phone}</p>`,
          `<p><b>CPF:</b> ${cpf}</b> </p>`,
          `<p> </p>`,
          `</div>`
        ].join('\n'),
        _file: undefined,
        mailTo: '' // email dp
      })

      res.status(201).send({ message: 'Solicitação enviada.'})
  } catch (error) {
      next(error)
  }
}

export default { getClients, addClient }