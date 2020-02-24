module.exports = function repeater(str, options) {
    let repeatTimes = options.repeatTimes;
    let separator = options.separator;
    let addition = options.addition;
    let additionRepeatTimes = options.additionRepeatTimes;
    let additionSeparator = options.additionSeparator;
    let finalStr = '';
    let additionStr = '';
    if(separator == undefined) {
        separator = '+';
    };
    if(additionSeparator == undefined) {
        additionSeparator = '|';
    };
    if(additionRepeatTimes == undefined && !addition) {
        additionStr = '';
    } else if((additionRepeatTimes == undefined && addition) || additionRepeatTimes == 1) {
        additionStr = addition;
    }  else {
        let i = 0;
        do {
            additionStr = additionStr + addition + additionSeparator;
            i = i + 1;
        } while (i < additionRepeatTimes - 1);
        additionStr = additionStr + addition;
    };
    if(repeatTimes == undefined || repeatTimes == 1){
        finalStr = finalStr + str + additionStr;
    } else {
        let j = 0;
        do {
            finalStr = finalStr + str + additionStr + separator;
            j = j + 1;
        } while (j < repeatTimes - 1);
        finalStr = finalStr + str + additionStr;
    };
    return finalStr;
};