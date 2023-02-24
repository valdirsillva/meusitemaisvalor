import { StatusCodes } from 'http-status-codes'
import { NextFunction, Request, Response, Router } from 'express'
import controller from '../controllers/product-controller'

const routerProduct = Router()

routerProduct.get("/products", controller.getProducts)
routerProduct.post("/product/add", controller.addProduct)
routerProduct.put("/product/:id", controller.updateProduct)
routerProduct.delete("/product/:id", controller.deleteProduct)

routerProduct.use((err: any, req: Request, res: Response, next: NextFunction) => {
  res.status(StatusCodes.BAD_REQUEST).send({ error: err.message})
})

export { routerProduct }

