import { User } from './models/User'

const user = User.buildUser({ name: 'Jorginho': age: 28 })

const on = user.on
on('save', () => console.log('User was saved'))

user.save()
