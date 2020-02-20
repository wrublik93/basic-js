module.exports = function createDreamTeam(members) {
  if(Array.isArray(members)){
    let code = '';
    members.forEach(function(item){
      if(typeof item == 'string'){
        let trim = item.trim();
        code += trim[0].toUpperCase();
      }
    });
    let codeArray = code.split('').sort();
      return codeArray.join('');
  } else {
    return false;
  }
};