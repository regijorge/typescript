class Vehicle {
  drive(): void {
    console.log('chugga chugga')
  }

  honk(): void {
    console.log('beep')
  }
}

class Car  extends Vehicle {
  private drive(): void {
    console.log('vrumm')
  }
}

const car = new Car()
car.drive()
car.honk()
