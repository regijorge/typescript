import { Router, Request, Response, NextFunction } from 'express'

interface RequestWithBody extends Request {
  body: { [key: string]: string | undefined}
}

function requireAuth(req: Request, res: Response, next: NextFunction): void {
  if (req.session && req.session.loggedIn) {
    next()
    return
  }

  res.status(403).send('Access Denied')
}

const router = Router()

router.get('/', (req: RequestWithBody, res: Response) => {
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


router.get('/logout', (req: RequestWithBody, res: Response) => {
  req.session = undefined
  res.redirect('/')
})

router.get('/protected', requireAuth, (req: RequestWithBody, res: Response) => {
  res.send('Welcome to protected page. Logged in user :)')
})

export { router }
