export interface SendMailData {
  subject: string;
  body: string;
  _file?: string | null;
  mailTo: string;
}

export interface MailAdapter {
  sendMail: (data: SendMailData) => Promise<void>;
}


