const LATIN_ARRAY = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
const LATIN_COUNT = 26;

class VigenereCipheringMachine {
    constructor(machineModification){
        this.machineModification = machineModification;
    }

    encrypt(message, key) {
        if(!message || !key){
            throw new Error();
        } else {
            //upperCase message and key
            message = message.toUpperCase();
            key = key.toUpperCase();

            //string to array (only A-Z)
            let messageArray = message.split('');
            let keyArray = key.split('');
            let messageArrayLatinOnly = [];
            let indexSymbol = [];
            messageArray.forEach(function(item, index){
                if(LATIN_ARRAY.includes(item)){
                    messageArrayLatinOnly.push(item);
                } else {
                    indexSymbol.push(index);
                }
            });
            //console.log(messageArray);
            //console.log(indexSymbol);
            //console.log(messageArrayLatinOnly);

            //difference in length message and key
            if(keyArray.length < messageArrayLatinOnly.length){
                let difference = messageArrayLatinOnly.length - keyArray.length;
                for(let i = 0; i < difference; i++){
                    keyArray.push(keyArray[i]);
                }
            } else if(keyArray.length > messageArrayLatinOnly.length){
                let difference = keyArray.length - messageArrayLatinOnly.length;
                keyArray.splice(-difference);
            };
            //console.log(keyArray);

            //equivalent numbers
            let messageArrayLatinOnlyNumbers = [];
            messageArrayLatinOnly.forEach(function(item){
                messageArrayLatinOnlyNumbers.push(LATIN_ARRAY.indexOf(item));
            });
            //console.log(messageArrayLatinOnlyNumbers);
            let keyArrayNumbers = [];
            keyArray.forEach(function(item){
                keyArrayNumbers.push(LATIN_ARRAY.indexOf(item));
            });
            //console.log(keyArrayNumbers);

            //sum elements of arrays
            let resultArrayNumbers = [];
            for(let i=0; i<messageArrayLatinOnlyNumbers.length; i++){
                if(messageArrayLatinOnlyNumbers[i] + keyArrayNumbers[i] < LATIN_COUNT){
                    resultArrayNumbers.push(messageArrayLatinOnlyNumbers[i] + keyArrayNumbers[i]);
                } else {
                    resultArrayNumbers.push(messageArrayLatinOnlyNumbers[i] + keyArrayNumbers[i] - LATIN_COUNT);
                }
            };
            //console.log(resultArrayNumbers);

            //equivalent latin
            let resultArray = [];
            resultArrayNumbers.forEach(function(item){
                resultArray.push(LATIN_ARRAY[item]);
            });

            //add symbol
            indexSymbol.forEach(function(item){
                resultArray.splice(item, 0, messageArray[item]);
            })
            //console.log(resultArray);

            //check modification machine
            if(this.machineModification == false){
                return resultArray.reverse().join('');
            } else {
                return resultArray.join('');
            }
        }
    }

    decrypt(message, key) {
       if(!message || !key){
           throw new Error();
       } else {
           //upperCase encryptedMessage and key
           message = message.toUpperCase();
           key = key.toUpperCase();

           //string to array (only A-Z)
           let messageArray = message.split('');
           let keyArray = key.split('');
           let messageArrayLatinOnly = [];
           let indexSymbol = [];
           messageArray.forEach(function(item, index){
               if(LATIN_ARRAY.includes(item)){
                   messageArrayLatinOnly.push(item);
               } else {
                   indexSymbol.push(index);
               }
           });
           //console.log(messageArray);
           //console.log(indexSymbol);
           //console.log(messageArrayLatinOnly);

           //difference in length message and key
            if(keyArray.length < messageArrayLatinOnly.length){
                let difference = messageArrayLatinOnly.length - keyArray.length;
                for(let i = 0; i < difference; i++){
                    keyArray.push(keyArray[i]);
                }
            } else if(keyArray.length > messageArrayLatinOnly.length){
                let difference = keyArray.length - messageArrayLatinOnly.length;
                keyArray.splice(-difference);
            };
            //console.log(keyArray);

            //equivalent numbers
            let messageArrayLatinOnlyNumbers = [];
            messageArrayLatinOnly.forEach(function(item){
                messageArrayLatinOnlyNumbers.push(LATIN_ARRAY.indexOf(item));
            });
            //console.log(messageArrayLatinOnlyNumbers);
            let keyArrayNumbers = [];
            keyArray.forEach(function(item){
                keyArrayNumbers.push(LATIN_ARRAY.indexOf(item));
            });
            //console.log(keyArrayNumbers);

            //difference elements of arrays
            let resultArrayNumbers = [];
            for(let i=0; i<messageArrayLatinOnlyNumbers.length; i++){
                if(messageArrayLatinOnlyNumbers[i] - keyArrayNumbers[i] < 0){
                    resultArrayNumbers.push(LATIN_COUNT + messageArrayLatinOnlyNumbers[i] - keyArrayNumbers[i]);
                } else {
                    resultArrayNumbers.push(messageArrayLatinOnlyNumbers[i] - keyArrayNumbers[i]);
                }
            };
            //console.log(resultArrayNumbers);

            //equivalent latin
            let resultArray = [];
            resultArrayNumbers.forEach(function(item){
                resultArray.push(LATIN_ARRAY[item]);
            });

            //add symbol
            indexSymbol.forEach(function(item){
                resultArray.splice(item, 0, messageArray[item]);
            })
            //console.log(resultArray);

            //check modification machine
            if(this.machineModification == false){
                return resultArray.reverse().join('');
            } else {
                return resultArray.join('');
            }
       }
    }
}

module.exports = VigenereCipheringMachine;
