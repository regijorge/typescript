// Simple Ann
const apples: number = 5
const speed: string = 'fast'
const hasName: boolean = true

// More complex
const date: Date = new Date()

const colors = ['red', 'green', 'blue']
const numbers: number[] = [1, 2, 3]
const truths: boolean[] = [true, true, false]

class Car {

}
const car: Car = new Car()

const point: { x: number, y: number } = {
  x: 10,
  y: 20
}

const logNumber: (i: number) => void = (i) => {
  console.log(i)
}


const json = '{"x": 10, "y": 20}'
const coords = JSON.parse(json)

let numberAboveZero: number | boolean = true
numberAboveZero = 10
