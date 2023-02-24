import { Request } from 'express';
import multer from 'multer';
import path from 'path';

// Middleware para upload de arquivos
const storage = multer.diskStorage({
  destination: function(req: Request, file, cb) {
    // const url = req.url
    cb(null, 'public/files')
  },
  filename: function(req: Request, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname))
  }
})

// function uploadToggle(url: string, type: object, cb: any) {}

export default { storage };