236. Basics of Metadataimport 'reflect-metadata'

const plane = {
  color: 'red'
}

Reflect.defineMetadata('note', 'hi there', plane)
const note = Reflect.getMetadata('note', plane)
console.log(note)
