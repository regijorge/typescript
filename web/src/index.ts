import { User } from './models/User'

const user = new User({ name: 'new record', age: 99 })
user.events.on('change', () => {
  console.log('eita')
})
user.events.trigger('change')
