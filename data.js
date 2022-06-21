const inputData = require('./inputReader.js');

const droneData = inputData.filter(line => line.includes('*drone'));
const locationData = inputData.filter(line => line.includes('*location'));

const convertStringToMatrix = (data) => data
    .map(drone => drone.replace(/[^\w-]/g, ""))
    .map(drone => [drone.split("-")[0], +(drone.split("-")[1])])
    .sort((a, b) => b[1] - a[1]);

const drones = convertStringToMatrix(droneData);
const locations = convertStringToMatrix(locationData);

module.exports = {
    drones,
    locations,
}