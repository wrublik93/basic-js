const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if(typeof sampleActivity == "string") {
    let activity = Math.log(MODERN_ACTIVITY / parseFloat(sampleActivity));
    let k = 0.693 / HALF_LIFE_PERIOD;
    let age = Math.ceil(activity / k);
    if(Number.isInteger(age) && age >= 0) {
      return age;
    } else {
      return false;
    }
  } else {
    return false;
  }
};
