import { User } from './models/User'

const user = new User({ name: 'Jorginho', age: 28 })

console.log('name', user.get('name'))
console.log('age', user.get('age'))
