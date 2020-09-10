module.exports = function transform(arr) {
    let discardNext = '--discard-next';
    let discardPrev = '--discard-prev';
    let doubleNext = '--double-next';
    let doublePrev = '--double-prev';
    let resultArray = [];
    if(!Array.isArray(arr)){
        throw new Error();
    };
    if(Array.isArray(arr) && arr.length == 0){
        return [];
    };
    for (let i = 0; i < arr.length; i++){
        switch(arr[i]) {
            case discardNext: {
                if(i + 1 < arr.length){
                    i++;
                };
                break;
            }

            case discardPrev: {
                if(i - 1 >= 0 && arr[i - 2] !== '--discard-next'){
                    resultArray.pop();
                };
                break;
            }

            case doubleNext: {
                if(i + 1 < arr.length){
                    resultArray.push(arr[i + 1]);
                };
                break;
            }

            case doublePrev: {
                if(i - 1 >= 0 && arr[i - 2] !== '--discard-next'){
                    resultArray.push(arr[i - 1]);
                };
                break;
            }

            default: {
                resultArray.push(arr[i]);   
            }
        }
    };
    return resultArray;
};