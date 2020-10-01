import { Request, Response } from 'express'

import EmailService from '../services/EmailService'

const users = [
  { name: 'Jorge Souza', email: 'test@example.com'}
]

export default {
  async index (req: Request, res: Response) {
    return res.send(users)
  },

  async create (req: Request, res: Response) {
    const emailService = new EmailService()

    emailService.sendMail({
      to: {
        name: 'Jorge',
        email: 'jorge@example.com'
      },
      message: {
        subject: 'Bem vindo!',
        body: 'Seu cadastro foi concluído com sucesso!'
      }
    })

    return res.send()
  }
}
