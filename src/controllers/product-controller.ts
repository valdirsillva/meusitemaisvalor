import { StatusCodes } from 'http-status-codes'
import { NextFunction, Request, Response } from 'express'
import PrismProductRepository from '../repositories/prisma/prisma-product-repository'

const productRepository = new PrismProductRepository()

const getProducts = async (_: Request, res: Response, next: NextFunction) => {
  try {
    const data = await productRepository.getAll()
    res.status(StatusCodes.OK).send(data)
  } catch(err) {
    next(err)
  }
}

const addProduct = async (req: Request, res: Response, next: NextFunction) => {
  const { name } = req.body
  try {
      if (!name) {
         throw new Error('Nome do produto é obrigatório.')
      }
      
      await productRepository.create({ name })
      res.status(201).send({ message: 'Produto cadastrado com sucesso'})
  } catch (error) {
      next(error)
  }
}

const updateProduct = async (req: Request, res: Response, next: NextFunction) => {
  const { name } = req.body
  const id = parseInt(req.params.id)
  try {
      if (!id) {
         throw new Error('O ID do produto é obrigatório.')
      }

      if (!name) {
         throw new Error('Nome do produto é obrigatório.')
      }
      
      await productRepository.update({ id, name })
      res.status(201).send({ success: 'Produto atualizado com sucesso'})
  } catch (error) {
      next(error)
  }
}

const deleteProduct = async (req: Request, res: Response, next: NextFunction) => {
  const id = parseInt(req.params.id)
  try {
    if (!id) {
       throw new Error("ID Produto é obrigatório.")
    }

    await productRepository.delete(id)
    res.status(StatusCodes.OK).send({ message: " Produto excluído"})
  } catch(error) {
    next(error)
  }
}
export default { getProducts, addProduct, updateProduct, deleteProduct }