/* Encuentra el máximo */

export function maxOfTwoNumbers(num1, num2){
    if (num1 > num2) {
        return num1;
    } else {
        return num2;
    }
}

export function findLongestWord(array){
    if(!array.length) {
        return undefined;
    }

    let longestWord = "";
    for (let i = 0; i < array.length; i++) {
        if (array[i].length > longestWord.length) {
            longestWord = array[i];
        }
    } return longestWord;
}

export function sumArray(array){
    let suma = 0;
    for (let i = 0; i < array.length; i++) {
        suma += array[i];
    } return suma;
}

export function averageNumbers(array){
    if (!array.length) {
        return undefined;
    }
    return sumArray(array) / array.length;
}

export function averageWordLength(){}
export function uniquifyArray(){}
export function doesWordExist(){}
export function howManyTimes(){}
export function greatestProduct(){}





