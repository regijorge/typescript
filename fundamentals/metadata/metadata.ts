import 'reflect-metadata'

@printMetadata
class Plane {
  color: string = 'red'

  @markFunction('123')
  fly():void {
    console.log('vrrrrrrrr')
  }
}

function markFunction (secret: string) {
  return function(target: Plane, key: string) {
    Reflect.defineMetadata('secret', secret, target, key)
  }
}

const secret = Reflect.getMetadata('secret', Plane.prototype, 'fly')
console.log(secret)


function printMetadata (target: typeof Plane) {
  for (let key in target.prototype) {
    const secret = Reflect.getMetadata('secret', target.prototype, key)
    console.log(secret)
  }
}
