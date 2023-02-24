
import multer from 'multer';
import uploadConfig from '../upload/upload'
import { NextFunction, Request, Response, Router } from 'express'
import { StatusCodes } from 'http-status-codes'
import controller from '../controllers/suggestion-or-doubts'

const routerSuggestionOrDoubt = Router()
const upload = multer(uploadConfig)

routerSuggestionOrDoubt.get("/suggestions-or-doubts", controller.getSuggestionOrDoubts)
routerSuggestionOrDoubt.post("/suggestions-or-doubts/add", upload.single("file"), controller.saveSuggestionOrDoubts)

routerSuggestionOrDoubt.use((err: any, req: Request, res: Response, next: NextFunction) => {
  res.status(StatusCodes.BAD_REQUEST).send({ error: err.message})
})

export { routerSuggestionOrDoubt }

