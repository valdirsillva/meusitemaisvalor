import { StatusCodes } from 'http-status-codes'
import { NextFunction, Request, Response, Router } from 'express'
import controller from '../controllers/client-controller'

const routerClient = Router()

routerClient.get("/clients", controller.getClients)
routerClient.post("/client/add", controller.addClient)

routerClient.use((err: any, req: Request, res: Response, next: NextFunction) => {
  res.status(StatusCodes.BAD_REQUEST).send({ error: err.message})
})

export { routerClient }

