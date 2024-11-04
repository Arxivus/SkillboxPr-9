const cars = {
    dodge: {
        doors: 4,
        isStarted: false,
        horsePower: 1000,
        color: 'orange'
    },

    ford: {
        doors: 4,
        isStarted: true,
        horsePower: 125,
        color: 'white'
    },

    lexus: {
        doors: 4,
        isStarted: false,
        horsePower: 290,
        color: 'green'
    },
}

function getCar(carName) {
    console.log(cars[carName] ?? 'Авто не найдено') 
}

getCar('lexus')
