const { drones, locations } = require('./data.js');

const keyOrValues = (matrix, i) => [...matrix.map(ele => ele[i])] // 0 = key, 1 = value
const bestDrone = drones[0];
const listofDrOnes = keyOrValues(drones, 0)

const dispatch = (drone, locations) => {
    const nextStop = keyOrValues(locations, 0)
    let tripNumber = 0;
    let locationCargo = keyOrValues(locations, 1);

    const trip = () => {
        if (tripNumber === 0) {
            console.log(`[${listofDrOnes.map(drone => drone).sort()}]`)
            console.log(`[${drone[0]}] - Weight Capacity: ${drone[1]} - picked to the task!`)
        }
        console.log('fueling up!')

        let droneCapacity = drone[1];

        for (let i in locationCargo) {
            if (droneCapacity >= locationCargo[i] && droneCapacity > 0) {
                console.log(`[${nextStop[i]}] - Package Weight: ${locationCargo[i]}`)
                droneCapacity -= locationCargo[i];

                delete locations[i];
                delete locationCargo[i];
            }
            if (droneCapacity <= locationCargo[i] && droneCapacity > 0) {
                console.log((`[${nextStop[i]}] - Package Weight: ${locationCargo[i]}`))
                locationCargo[i] -= droneCapacity;
                droneCapacity = 0;
            }
        }

        tripNumber++
        console.log(`Trip number ${tripNumber} has ended!`)

        locations.filter(loc => loc).length && trip(drone, locations)
    }
    return trip()
}
dispatch(bestDrone, locations)