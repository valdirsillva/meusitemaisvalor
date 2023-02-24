
import uploadConfig from '../upload/upload'
import multer from 'multer';

import { NextFunction, Request, Response, Router } from 'express'
import { StatusCodes } from 'http-status-codes'
import controller from '../controllers/report-controller'

const routerReport = Router()
const upload = multer(uploadConfig)

routerReport.get("/facts-aware", controller.getFactsAwares)
routerReport.get("/branches", controller.getBranchesCompany)
routerReport.get("/relations-types", controller.getRelationsTypes)
routerReport.get("/relation-company", controller.getRelationsCompany)

routerReport.get("/reports", controller.getReports)
routerReport.post("/report/add", upload.single('has_file'), controller.saveReport)

routerReport.use((err: any, req: Request, res: Response, next: NextFunction) => {
  res.status(StatusCodes.BAD_REQUEST).send({ error: err.message})
})

export { routerReport }
