import { NextFunction, Request, Response } from 'express'
import { get, controller, post, bodyValidator } from './decorators'

@controller('/auth')
class LoginController {
  @get('/login')
  getLogin(req: Request, res: Response): void {
    res.send(`
      <form method="POST">
        <div>
          <label>Email</label>
          <input type="text" name="email" />
        </div>
        <div>
          <label>Password</label>
          <input type="password" name="password" />
        </div>
        <button type="submit">Submit</button>
      </form>
    `)
  }

  @post('/login')
  @bodyValidator('email', 'password')
  postLogin(req: Request, res: Response): void {
    const  { email, password } = req.body

    if (email && password && email === 'hi@hi.com' && password === '123') {
      req.session = { loggedIn: true}
      res.redirect('/')
    } else {
      res.send('Invalid email or password')
    }
  }

  @get('/logout')
  getLogout(req: Request, res: Response): void {
    req.session = null
    res.redirect('/')
  }
}
