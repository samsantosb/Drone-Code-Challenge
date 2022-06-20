const fs = require('fs');
const text = fs.readFileSync("./input.txt", 'utf-8');
const data = text.split('\n')

module.exports = data;