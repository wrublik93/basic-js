module.exports = function getSeason(date) {
  if(!date) {
    return 'Unable to determine the time of year!'
  };
  try {
    date.getTime();
  } catch (err) {
    throw new Error (err);
  };
  let month = date.getMonth() + 1;
  if(month >= 3 && month <= 5) {
    return 'spring';
  } else if(month >= 6 && month <= 8) {
    return 'summer';
  } else if(month >= 9 && month <= 11) {
    return 'autumn';
  } else if(month == 12 || month == 1 || month == 2) {
    return 'winter';
  } else {
    return false;
  }
};
