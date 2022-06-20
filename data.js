const inputData = require('./inputReader.js');

const drones = inputData.filter(line => line.includes('*drone'));
const locations = inputData.filter(line => line.includes('*location'));

const convertStringToMatrix = (data) => {
    const dataMatrix = data
        .map(drone => drone.replace(/[^\w-]/g, ""))
        .map(drone => [drone.split("-")[0], +(drone.split("-")[1])])
        .sort((a, b) => b[1] - a[1]);
    return dataMatrix;
}

const dronesMatrix = convertStringToMatrix(drones);
const locationsMatrix = convertStringToMatrix(locations);

module.exports = {
    dronesMatrix,
    locationsMatrix,
}