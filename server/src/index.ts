import express from 'express'
import bodyParser from 'body-parser'
import cookieSession from 'cookie-session'
import { AppRouter } from './AppRouter'

import './controllers/RootController'
import './controllers/LoginController'

const app = express()

app.use(bodyParser.urlencoded({ extended: true }))
app.use(cookieSession({ keys: ['userSession'] }))
app.use(AppRouter.getInstance())

app.listen(3000, () => {
  console.log('Listening to http://localhost:3000')
})
