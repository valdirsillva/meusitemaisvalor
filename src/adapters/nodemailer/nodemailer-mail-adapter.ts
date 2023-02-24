import * as dotenv from 'dotenv'

import nodemailer, { TransportOptions } from 'nodemailer'
import { MailAdapter, SendMailData } from '../mail-adapter'
dotenv.config()

const transport = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  secure: process.env.SMTP_SECURE, 
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS
  }
} as TransportOptions)

export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({ subject, body, _file = undefined, mailTo }: SendMailData) {
    let attachmentsFile
   
    if (_file !== undefined && _file !== null ) {
      let extension = _file.split('.').pop()
      attachmentsFile = [
          {
            filename: `${new Date().toISOString()}.${extension}`,
            path: `${_file}`,
            cid: new Date().toString() 
          }
      ]
    }
    
    await transport.sendMail({
      from: process.env.SMTP_SENDER,
      to: mailTo,
      cc: '',
      subject,
      html: body,
      attachments: attachmentsFile
    })
  }
}
