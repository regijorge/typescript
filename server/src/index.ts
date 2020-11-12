import express, { Request, Response } from 'express'

const app = express()

app.get('/', (req: Request, res: Response) => {
  res.send(`
    <h1>Hi there</h1>
  `)
})

app.listen(3000, () => {
  console.log('Listening to http://localhost:3000')
})
