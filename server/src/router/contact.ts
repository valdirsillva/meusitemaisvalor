import { StatusCodes } from 'http-status-codes';
import controller from '../controllers/contact-controller'
import { Router, Request, Response, NextFunction} from 'express'

const routerContact = Router()

routerContact.get("/contacts", controller.getContacts)
routerContact.post("/contact/add", controller.createContact)

routerContact.use((err: any, req: Request, res: Response, next: NextFunction) => {
    res.status(StatusCodes.BAD_REQUEST).send({ error: err.message})
})

export { routerContact };

