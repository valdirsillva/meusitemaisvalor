import { StatusCodes } from 'http-status-codes'
import { Request, Response, NextFunction} from 'express'
import { PrismaSuggestionOrDoubtsRepository } from '../repositories/prisma/prisma-suggestion-or-doubts-repository'
import { NodemailerMailAdapter } from '../adapters/nodemailer/nodemailer-mail-adapter'

const suggestionOrDoubtsRepository = new PrismaSuggestionOrDoubtsRepository()

const getSuggestionOrDoubts = async (_: Request, res: Response, next: NextFunction) => {
  try {
    const suggestionsOrDoubts = await suggestionOrDoubtsRepository.getAll()
    res.status(StatusCodes.OK).send(suggestionsOrDoubts)
  } catch(error) {
    next(error)
  }
}

const saveSuggestionOrDoubts = async (req: Request, res: Response, next: NextFunction) => {
  const MAX_SIZE = 2000000
  const { content_name, relationType, name, email, message } = req.body
  let hasFile = `${process.env.HOSTNAME}/files/${req.file?.filename}`  
  try {
    
    if (req.file?.size !== undefined && req.file?.size > MAX_SIZE) {
      throw new Error("O arquivo selecionado é superior a 2MB, limite suportado pelo sistema.")
    }

    if (name === '' || email === '') {
       throw new Error("Nome e email são obrigatórios")
    }
    if (message === '') {
       throw new Error("O campo sugestão deve ser preenchido")
    }

    await suggestionOrDoubtsRepository.create({
      content_name, relationType, name, email, message, file: hasFile
    })

    const testNodemailerAdapter = new NodemailerMailAdapter()

    await testNodemailerAdapter.sendMail({
      subject: 'CONTATO SITE - DÚVIDA',
      body: [
        `<div style="font-family sans-serif. font-size:16px; color: #222;">`,
        `<p><b>Nome:</b> ${name}</p>`,
        `<p><b>E-mail:</b> ${email}</p>`,
        `<p><b>Tipo de relação com Mais Valor:</b> ${relationType}</p>`,
        `<p><b>Dúvida com relação ao código de conduta, politicas e procedimentos da Mais Valor:</b><br/> ${message} <b></p>`,
        `<p> </p>`,
        `</div>`
      ].join('\n'),

      _file: hasFile,
      mailTo: 'valdir.correia@grupomaisvalor.com.br'
    })

    res.status(StatusCodes.CREATED).send({ message: "Dados enviado com sucesso."})

  } catch(error) {
    next(error)
  }
}

export default { getSuggestionOrDoubts, saveSuggestionOrDoubts }