import { User } from './models/User'

const user = new User({ id: 1 })

const on = user.on
on('change', () => console.log(user))

user.fetch()
