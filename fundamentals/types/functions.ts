// Arrow function
const add = (a: number, b: number): number => {
  return a + b
}

// Function
function subtract (a: number, b: number): number {
  return a - b
}

// Anonymous functions
const divide = function subtract (a: number, b: number): number {
  return a - b
}

// Return nothing
const logger = (message: string): void => {
  console.log(message)
}

// Never gonna access the end of function
const throwError = (message: string) => {
  throw new Error(message)
}

// Destructuring variables
const forecast = {
  date: new Date(),
  weather: 'sunny'
}

// Object Annotations
const logWeather = (forecast: { date: Date, weather: string }): void => {
  console.log(forecast.date)
  console.log(forecast.weather)
}

// Destructing Object Annotations
const logWeather2 = ({ date, weather }: { date: Date, weather: string }): void => {
  console.log(date)
  console.log(weather)
}
