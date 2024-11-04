function createCar(newCar) {
    const car = {
        wheels: 4,
        doors: 2,
        isStarted: true,
    }
    return Object.assign(newCar, car)
}

console.log(createCar({ name: 'Haval', hp: 198 }))