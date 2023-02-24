import { StatusCodes } from 'http-status-codes'
import { Request, Response, NextFunction} from 'express'
import PrismaReportRepository from '../repositories/prisma/prisma-report-repository'
import { ReportMailCustom } from '../adapters/report-mail'
import { RequestValidate } from '../validate/request-validate'
const mailCustom = new ReportMailCustom()

const reportRepository = new PrismaReportRepository()

const getBranchesCompany = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const branchesCompanies = await reportRepository.getBranchesCompany()
    res.status(StatusCodes.OK).send(branchesCompanies)
  } catch(error) {
    next(error)
  } 
}

const getRelationsCompany = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const relationsCompany = await reportRepository.getRelationsCompany()
    res.status(StatusCodes.OK).send(relationsCompany)
  } catch(error) {
    next(error)
  } 
}

const getRelationsTypes = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const relationsTypes = await reportRepository.getRelationsTypes()
    res.status(StatusCodes.OK).send(relationsTypes)
  } catch(error) {
    next(error)
  } 
}

const getFactsAwares = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const factsAwares = await reportRepository.getFactsAwares()
    res.status(StatusCodes.OK).send(factsAwares)
  } catch(error) {
    next(error)
  } 
}

const getReports = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const reports = await reportRepository.getAll()
    res.status(StatusCodes.OK).send(reports)
  } catch(error) {
    next(error)
  } 
}
const saveReport = async (req: Request, res: Response, next: NextFunction) => {
  const { fullname, email, phone, details, has_witnesses, evidence_of_facts, has_balance, suggestion } = req.body
    
  let relationID = parseInt(req.body.relationID)
  let relationTypeID = parseInt(req.body.relationTypeID)
  let branchID = parseInt(req.body.branchID)
  let factAwareID = parseInt(req.body.factAwareID)
  let channelID = parseInt(req.body.channelID)
  let isManagerAware = !req.body.isManagerAware
  let isManagerInvolved = !req.body.isManagerInvolved
  let itHaveFile = req.file?.filename

  let file = itHaveFile ? `${process.env.HOSTNAME}/files/${itHaveFile}` : undefined

  try {
    RequestValidate(req);

    const report = await reportRepository.create({
      fullname, 
      email, 
      phone, 
      details,
      has_witnesses,
      evidence_of_facts,
      has_balance, 
      suggestion, 
      has_file: file, 
      relationID, 
      relationTypeID, 
      branchID, 
      factAwareID, 
      channelID, 
      isManagerAware, 
      isManagerInvolved
    })

    let reports = await reportRepository.findReportUnique(report)
    let data = reports.pop()    
    mailCustom.execute(data!)
    res.status(StatusCodes.CREATED).send({ message: "Dados enviado com sucesso."})
  } catch(error) {
    next(error)
  }
}


export default { getReports, saveReport, getBranchesCompany, getRelationsTypes, getFactsAwares, getRelationsCompany }