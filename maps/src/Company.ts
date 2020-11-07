import faker from "faker"
import { Mappable } from './CustomMap'

export class Company implements Mappable{
  companyName: string
  catchPhrase: string
  color: string
  location: {
    lat: number
    lng: number
  }

  constructor() {
    this.companyName = faker.company.companyName()
    this.catchPhrase = faker.company.catchPhrase()
    this.color: 'green'
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude())
    }
  }

  markerContent(): string {
    return `
      <h1>Company name: ${this.companyName}</h1>
      <h3>CatchPhrase: ${this.catchPhrase}</h3>
    `
  }
}
