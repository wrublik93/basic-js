module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
    let turnsTotal = Math.pow(2, disksNumber) - 1;   //minimum number of turns
    let turnsSpeedSeconds = turnsSpeed / 3600;   //turns per second
    let timeTotal = Math.floor(turnsTotal / turnsSpeedSeconds);  //time to solve
    let object = {
        turns: turnsTotal,
        seconds: timeTotal
    };
    console.log(object);
    return object;
}