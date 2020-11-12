import { Router, Request, Response } from 'express'

interface RequestWithBody extends Request {
  body: { [key: string]: string | undefined}
}

const router = Router()

router.get('/login', (req: Request, res: Response) => {
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
})

router.post('/login', (req: RequestWithBody, res: Response) => {
  const  { email, password } = req.body

  if (email && password && email === 'hi@hi.com' && password === '123') {
    req.session = { loggedIn: true}
    res.redirect('/')
  } else {
    res.send('Invalid email or password')
  }
})

router.get('/', (req: RequestWithBody, res: Response) => {
  console.log(req.session.loggedIn)
  if (req.session && req.session.loggedIn) {
    res.send(`
      <div>You are logged in</div>
      <a href="/logout">Log out</a>
    `)
  } else {
    res.send(`
      <div>Your are not logged in</div>
      <a href="/login">Login</a>
    `)
  }
})

export { router }
