import { User } from './models/User'

const user = new User({ name: 'Jorginho', age: 28 })

user.on('change', () => {})

console.log(user)
