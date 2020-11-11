import { User } from './models/User'

const user = new User({ name: 'new record', age: 99 })

console.log(user.get('name'))

const on = user.on
const trigger = user.trigger

on('change', () => console.log('user has been changed'))

user.set({ name: 'a new name'})
