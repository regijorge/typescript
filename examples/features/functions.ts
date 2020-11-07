// declaring return type
const add = (a: number, b: number): number => {
  return a + b
}

// if return type not defined TS will infer it
const subtract = (a: number, b: number) => {
  return a + b
}

// do not return anything
const log = (message: string): void => {
  console.log(message)
}

// never execute entire function
const error = (message: string): never => {
  throw new Error(message)
}

// destructuring
const forecast = ({ date, weather }: { date: Date, weather: string }) => {
  console.log(date, weather)
}

