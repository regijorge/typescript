const oldCivic = {
  name: 'civic',
  year: new Date(),
  broken: true
}

const printVehicle = (vehicle: { name: string, year: number, broken: boolean }): void=> {
  console.log(`Name: ${vehicle.name}, Year: ${vehicle.year}, Broken: ${vehicle.broken}`)
}

printVehicle(oldCivic)


interface Vehicle {
  name: string;
  year: Date;
  broken: boolean;
}

const printVehicle2 = (vehicle: Vehicle): void => {
  console.log(`Name: ${vehicle.name}, Year: ${vehicle.year}, Broken: ${vehicle.broken}`)
}

printVehicle2(oldCivic)
