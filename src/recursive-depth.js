module.exports = class DepthCalculator {
    calculateDepth(arr, number = 1) {
        let filteredArray = arr.filter(item => Array.isArray(item));
        if (filteredArray.length == 0) {
            return number;
        } else {
            let finishArray = filteredArray.reduce(function(a, b){
                return a.concat(b);
            })
            return number + this.calculateDepth(finishArray);
        }
    }
};