module.exports = function countCats(matrix) {
  if(matrix.length != 0) {
    let number = 0;
    let newMatrix = matrix.reduce(function(a, b){
      return a.concat(b);
    });
    newMatrix.forEach(function(item){
      if(item === "^^"){
        number++;
      }
    });
    return number;
  } else {
    return 0;
  }
};
