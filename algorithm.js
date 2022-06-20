const data = require('./data.js');

const matrixData = (matrix, i) => [...matrix.map(element => element[i])]
const bestDrone = data.dronesMatrix[0];
const listofDrOnes = matrixData(data.dronesMatrix, 0)

const dispatch = (drone, location) => {
    const otherDrones = listofDrOnes.filter(element => element !== drone[0]);
    const actualLocation = matrixData(location, 0)
    let numberOfDispatches = 0;

    const trip = () => {
        if (numberOfDispatches === 0) {
            for (element of otherDrones) console.log(`[${element}]`)
            console.log(`[${drone[0]}] - Is picked to the task!`)
        }

        let droneCapacity = drone[1];
        let locationValue = matrixData(location, 1);

        for (let i in locationValue) {
            if (droneCapacity >= locationValue[i] && droneCapacity >= 0) {
                console.log(`[${actualLocation[i]}]`)
                droneCapacity -= locationValue[i];

                delete location[i];
                delete locationValue[i]
            }
        }
        numberOfDispatches++
        console.log(`Trip#${numberOfDispatches}`)

        location.filter(element => element).length && trip(drone, location)
    }
    return trip()
}
dispatch(bestDrone, data.locationsMatrix)