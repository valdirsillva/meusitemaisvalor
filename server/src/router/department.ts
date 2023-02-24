import { StatusCodes } from 'http-status-codes'
import controller from '../controllers/department-controller'
import { Router, Request, Response, NextFunction} from 'express'
const routerDepartments = Router()

routerDepartments.get("/departments", controller.getDepartments)
routerDepartments.post("/department/add", controller.createDepartment)
routerDepartments.put("/department/:id", controller.editDepartment)

routerDepartments.use((err: any, req: Request, res: Response, next: NextFunction) => {
  res.status(StatusCodes.BAD_REQUEST).send({ error: err.message})
})

export {routerDepartments};


