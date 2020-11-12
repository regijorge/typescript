class Boat {
  color: string = 'red'

  get formattedColor(): string {
    return `This boats color is ${this.color}`
  }

  @logError('Oops, something wrong is not right')
  pilot(): void {
    throw new Error()
    console.log('swish')
  }
}

function logError(message: string) {
  return function(target: any, key: string, desc: PropertyDescriptor): void {
    const method = desc.value

    try {
      method()
    } catch (err) {
      console.error(message)
    }
  }
}
