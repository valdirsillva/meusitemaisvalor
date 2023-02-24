import { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { NodemailerMailAdapter } from '../adapters/nodemailer/nodemailer-mail-adapter';
import PrismaCandidateRepository from '../repositories/prisma/prisma-candidate-repository';

const candidateRepository = new PrismaCandidateRepository()

const getCandidates = async (_: Request, res: Response, next: NextFunction) => {
  try {
    const candidates = await candidateRepository.getAll()
    res.status(StatusCodes.OK).send(candidates)
  } catch(err) {
    next(err)
  }
}

const saveCandidate =  async (req: Request, res: Response, next: NextFunction) => {
  const MAX_SIZE = 2000000

  const { name, gender, phone, email, city, state, area, comment } = req.body
  const hasFile = req.file?.filename ?? null
  
  try {
   
    if (req.file?.size !== undefined && req.file?.size > MAX_SIZE) {
      throw new Error("O arquivo selecionado é superior a 2MB, limite suportado pelo sistema.")
    }

    if (name == '' || gender == '' || email == '') {
        throw new Error("Nome, sexo e email são obrigatórios.")
    }

    if (city == '' || state == '' ) {
       throw new Error("Cidade e estado são obrigatórios.")
    }

    const data = await candidateRepository.create({
      name, gender, phone, email, city, state, area, has_file: hasFile, comment
    })


    const testNodemailerAdapter = new NodemailerMailAdapter()

    await testNodemailerAdapter.sendMail({
      subject: 'TRABALHE CONOSCO',
      body: [
        `<div style="font-family sans-serif. font-size:16px; color: #222;">`,
        `<p><b>Nome:</b> ${name}</p>`,
        `<p><b>E-mail:</b> ${email}</p>`,
        `<p><b>Tel:</b> ${phone}</p>`,
        `<p><b>Cidade:</b> ${city} - <b>Estado:</b> ${state}</p>`,
        `<p><b>Mensagem:</b> ${comment} <b></p>`,
        `<p> </p>`,
        `</div>`
      ].join('\n'),

      _file: hasFile,
      mailTo: 'valdir.correia@grupomaisvalor.com.br'
    })
    
    res.status(StatusCodes.CREATED).send({ message: "Dados enviados com sucesso."})
  } catch(err) {
    next(err)
  }
}
export default { getCandidates, saveCandidate }