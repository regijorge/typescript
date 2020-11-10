import { User } from './models/User'

const user = new User({ name: 'Jorginho', age: 28 })

user.on('change', () => {
  console.log('Change number 1')
})

user.on('change', () => {
  console.log('Change number 2')
})

user.on('save', () => {
  console.log('Save something')
})

user.trigger('change')
user.trigger('save')
