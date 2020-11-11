import { User } from './models/User'

const user = new User({ name: 'Jorgito': age: 18 })

const on = user.on
on('save', () => console.log('User was saved'))

user.save()
