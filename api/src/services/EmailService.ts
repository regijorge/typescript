interface IMailTo {
  name: string
  email: string
}

interface IMailMessage {
  subject: string
  body: string
  attachment?: string[]
}

interface IMailDTO {
  to: IMailTo
  message: IMailMessage
}

interface IEmailService {
  sendEmail(request: IMailDTO): void
}

class EmailService implements IEmailService{
  sendMail ({ to, message }: IMailDTO) {
    console.log(`Email enviado para ${to.name}. Mensagem: ${message.body}`)
  }
}

export default EmailService
