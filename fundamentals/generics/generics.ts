class ArrayOfNumbers {
  constructor(public collection: number[]) {}

  get(index: number): number {
    return this.collection[index]
  }
}

class ArrayOfStrings {
  constructor(public collection: string[]) {}

  get(index: number): string {
    return this.collection[index]
  }
}

// Using Generics
class ArrayOfAnything<T> {
  constructor(public collection: T[]) {}

  get(index: number): T {
    return this.collection[index]
  }
}

const arrayOfStrings = new ArrayOfAnything<string>(['a', 'b', 'c'])
const arrayOfNumbers = new ArrayOfAnything<number>([1, 2, 3])
// or (inference)
const arrayOfStrings = new ArrayOfAnything(['a', 'b', 'c'])
const arrayOfNumbers = new ArrayOfAnything([1, 2, 3])

// functions
// Without Generics
function printStrings (arr: string[]):void {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i])
  }
}

function printNumbers (arr: string[]): void {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i])
  }
}

// WIth Generics
function printAnything<T> (arr: T[]): void {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i])
  }
}

printAnything<string>(['a', 'b', 'c'])
printAnything<number>([1, 2, 3])
// or inference
printAnything inference(['a', 'b', 'c'])
printAnything([1, 2, 3])
