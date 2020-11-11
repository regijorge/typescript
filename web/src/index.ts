import { User } from './models/User'

const user = new User({ name: 'new record', age: 99 })

console.log(user.get('name'))

const on = user.on
const trigger = user.trigger

on('save', () => console.log('saved'))
trigger('save')
