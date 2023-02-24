
import multer from 'multer';
import uploadConfig from '../upload/upload'
import { NextFunction, Request, Response, Router } from 'express'
import { StatusCodes } from 'http-status-codes'
import controller from '../controllers/candidate-controller'

const routerCandidate = Router()
const upload = multer(uploadConfig)

routerCandidate.get("/candidates", controller.getCandidates)
routerCandidate.post("/candidate/add", upload.single('has_file'), controller.saveCandidate)

routerCandidate.use((err: any, req: Request, res: Response, next: NextFunction) => {
  res.status(StatusCodes.BAD_REQUEST).send({ error: err.message})
})

export { routerCandidate }

