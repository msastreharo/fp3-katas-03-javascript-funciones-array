import {maxOfTwoNumbers,
  findLongestWord,
  sumArray,
  averageNumbers,
  averageWordLength,
  uniquifyArray,
  doesWordExist,
  howManyTimes,
  greatestProduct
}  from '../src/funcArray.js';

const shuffle = (currentArray) => {
// let array = currentArray.slice();
let array = [...currentArray];
let counter = array.length;
while (counter > 0) {
  let index = Math.floor(Math.random() * counter--);
  array[index] = [array[counter], array[counter] = array[index]][0];
}
return array;
}

test('1+1 = 2',()=>expect(1+1).toBe(2));

describe('Find the maximun - maxOfTwoNumbers #1', ()=>{
  test('Defines maxOfTwoNumbers',()=>{
      expect(typeof maxOfTwoNumbers).toBe('function');
  });
  test('First parameter larger', ()=> {
      expect(maxOfTwoNumbers(2, 1)).toBe(2);
    });

  test('Second parameter larger', ()=> {
      expect(maxOfTwoNumbers(1, 3)).toBe(3);
    });

  test('First and Second parameter equal', ()=> {
      expect(maxOfTwoNumbers(4, 4)).toBe(4);
    });
})

describe('Finding Longest Word - findLongestWord #2', ()=> {
test('Defines findLongestWord', ()=> {
    expect(typeof findLongestWord).toBe('function');
  });

test('returns undefined testh an empty array', ()=> {
    expect(findLongestWord([])).toBe(undefined);
  });

test('returns the word test an 1-word array', ()=> {
    expect(findLongestWord(['test'])).toBe('test');
  });

test('returns the first occurrence word when longest have multiple occurrences ', ()=> {
    expect(findLongestWord(['foo', 'bar'])).toBe('foo');
    expect(findLongestWord(['bar', 'foo'])).toBe('bar');
  });

test('returns the longest occurrence when test has multiple words', ()=> {
    let words = ['a', 'zab', '12abc', '$$abcd', 'abcde', 'factoriaF5'];
    for (let i = 0; i < 10; i++) {
      expect(findLongestWord(shuffle(words))).toBe('factoriaF5');
    }
  });
});

describe('Calculating a Sum - sumArray #3', ()=> {
test('Defines sumArray', ()=> {
    expect(typeof sumArray).toBe('function');
  });

test('returns zero testh an empty array', ()=> {
    expect(sumArray([])).toBe(0);
  });

test('returns the number testh one number array', ()=> {
    expect(sumArray([4])).toBe(4);
  });

test('returns zero if all elements are zero', ()=> {
    expect(sumArray([0, 0, 0, 0, 0])).toBe(0);
  });

test('returns the sum, potestive', ()=> {
    expect(sumArray([1, 2, 3, 4, 5])).toBe(15);
  });

test('returns the sum, negative', ()=> {
    expect(sumArray([-1, -2, -3, -4, -5])).toBe(-15);
  });
});

describe('Calculating the Average - averageNumbers #4', ()=> {
test('Defines averageNumbers', ()=> {
    expect(typeof averageNumbers).toBe('function');
  });

test('returns undefined testh an empty array', ()=> {
    expect(averageNumbers([])).toBe(undefined);
  });

test('returns the average of a unique element array', ()=> {
    expect(averageNumbers([9])).toBe(9);
  });

test('returns the average even testh negative values', ()=> {
    expect(averageNumbers([9, -3, -4, 6])).toBe(2);
  });

test('returns the average of the array', ()=> {
    expect(averageNumbers([9, 10, 82, 92, 32, 102, 58])).toBe(55);
  });

test('returns the average of the array, float result', ()=> {
    expect(averageNumbers([1, 2])).toBe(1.5);
  });
});

describe('Calculating the Average - averageWordLength #5', ()=> {
test('Defines averageWordLength', ()=> {
    expect(typeof averageWordLength).toBe('function');
  });

test('returns undefined testh an empty array', ()=> {
    expect(averageWordLength([])).toBe(undefined);
  });

test('returns the length of a unique element array', ()=> {
    expect(averageWordLength(['bcncodes'])).toBe(8);
  });

test('returns the length of a unique element array, float', ()=> {
    expect(averageWordLength(['a', 'ab'])).toBe(1.5);
  });

test('returns the average of a the array', ()=> {
    expect(averageWordLength(['Bcncodes', 'Madrid', 'Barcelona', 'Paris', 'Miami', 'Mexico', 'Berlin', 'Programmers'])).toBe(7);
  });
});

describe('Unique Arrays - uniquifyArray #6', ()=> {
test('Defines uniquifyArray', ()=> {
    expect(typeof uniquifyArray).toBe('function');
  });

test('returns undefined testh an empty array', ()=> {
    expect(uniquifyArray([])).toBe(undefined);
  });

test('returns the array when having a single element', ()=> {
    expect(uniquifyArray(['FactoriaF5'])).toEqual(['FactoriaF5']);
  });

test('returns the correct array when having an array of the same element', ()=> {
    expect(uniquifyArray(['FactoriaF5', 'FactoriaF5', 'FactoriaF5'])).toEqual(['FactoriaF5']);
  });

test('returns the same array when no element is repeated', ()=> {
    expect(uniquifyArray(['Cat', 'Dog', 'Cow'])).toEqual(['Cat', 'Dog', 'Cow']);
  });

test('returns the uniquified array', ()=> {
    expect(uniquifyArray(['iPhone', 'Samsung', 'Android', 'iOS', 'iPhone', 'Samsung', 'Nokia', 'Blackberry', 'Android'])).toEqual(['iPhone', 'Samsung', 'Android', 'iOS', 'Nokia', 'Blackberry']);
  });
});

describe('Finding Elements - doesWordExist #7', ()=> {
test('Defines doesWordExist', ()=> {
    expect(typeof doesWordExist).toBe('function');
  });

test('returns false testh an empty array', ()=> {
    expect(doesWordExist([])).toBe(false);
  });

test('returns true if the word we are looking is the only one on the array', ()=> {
    expect(doesWordExist(['machine'], 'machine')).toBe(true);
  });

test('returns false if the word we are looking is not in the array', ()=> {
    expect(doesWordExist(['machine', 'poison', 'eat', 'apple', 'horse'], 'ratatouille')).toBe(false);
  });

test('returns true if the word we are looking is in the array', ()=> {
    expect(doesWordExist(['pizza', 'sandwich', 'snack', 'soda', 'book', 'computer'], 'book')).toBe(true);
  });
});

describe('Counting Repetion - howManyTimes #8', ()=> {
test('Defines howManyTimes', ()=> {
    expect(typeof howManyTimes).toBe('function');
  });

test('returns false testh an empty array', ()=> {
    expect(howManyTimes([])).toBe(undefined);
  });

test('returns one when the word appears only one time on the array', ()=> {
    expect(howManyTimes(['a', 'b', 'c'], 'a')).toBe(1);
  });

test('returns zero when the word does not appears on the array', ()=> {
    expect(howManyTimes(['a', 'b', 'c'], 'z')).toBe(0);
  });

test('returns five when the word appears 5 times on the array', ()=> {
    expect(howManyTimes(['basketball', 'football', 'tennis', 'rugby', 'rugby', 'ping pong', 'rugby', 'basketball', 'rugby', 'handball', 'rugby'], 'rugby')).toBe(5);
  });
});

describe('Counting Repetion - greatestProduct', ()=> {
test('Defines greatestProduct #9', ()=> {
    expect(typeof greatestProduct).toBe('function');
  });

test('Return 1 when all the numbers of the arrays are 1', ()=> {
    let matrix = [
      [1, 1, 1, 1],
      [1, 1, 1, 1],
      [1, 1, 1, 1],
      [1, 1, 1, 1]
    ];
    expect(greatestProduct(matrix)).toBe(1);
  });

test('Return maxProduct when all max is horizontal', ()=> {
    let matrix = [
      [9, 9, 9, 9],
      [1, 1, 1, 1],
      [1, 1, 1, 1],
      [1, 1, 1, 1]
    ];
    expect(greatestProduct(matrix)).toBe(6561);
  });

test('Return maxProduct when all max is horizontal, not first row', ()=> {
    let matrix = [
      [1, 1, 1, 1],
      [1, 1, 1, 1],
      [9, 9, 9, 9],
      [1, 1, 1, 1]
    ];
    expect(greatestProduct(matrix)).toBe(6561);
  });

test('Return maxProduct when all max is vertical', ()=> {
    let matrix = [
      [9, 1, 1, 1],
      [9, 1, 1, 1],
      [9, 1, 1, 1],
      [9, 1, 1, 1]
    ];
    expect(greatestProduct(matrix)).toBe(6561);
  });

test('Return maxProduct when all max is vertical, not first column', ()=> {
    let matrix = [
      [1, 9, 1, 1],
      [1, 9, 1, 1],
      [1, 9, 1, 1],
      [1, 9, 1, 1]
    ];
    expect(greatestProduct(matrix)).toBe(6561);
  });

  test('Return maxProduct when all max is diagonal', ()=> {
    let matrix = [
      [9, 1, 1, 1],
      [1, 9, 1, 1],
      [1, 1, 9, 1],
      [1, 1, 1, 9]
    ];
    expect(greatestProduct(matrix)).toBe(6561);
  });

test('Return 16 when all the numbers of the arrays are 2', ()=> {
    let matrix = [
      [8, 2, 22, 97, 38, 15, 0, 40, 0, 75, 4, 5, 7, 78, 52, 12, 50, 77, 91, 8],
      [49, 49, 99, 40, 17, 81, 18, 57, 60, 87, 17, 40, 98, 43, 69, 48, 4, 56, 62, 0],
      [81, 49, 31, 73, 55, 79, 14, 29, 93, 71, 40, 67, 53, 88, 30, 3, 49, 13, 36, 65],
      [52, 70, 95, 23, 4, 60, 11, 42, 69, 24, 68, 56, 1, 32, 56, 71, 37, 2, 36, 91],
      [22, 31, 16, 71, 51, 67, 63, 89, 41, 92, 36, 54, 22, 40, 40, 28, 66, 33, 13, 80],
      [24, 47, 32, 60, 99, 3, 45, 2, 44, 75, 33, 53, 78, 36, 84, 20, 35, 17, 12, 50],
      [32, 98, 81, 28, 64, 23, 67, 10, 26, 38, 40, 67, 59, 54, 70, 66, 18, 38, 64, 70],
      [67, 26, 20, 68, 2, 62, 12, 20, 95, 63, 94, 39, 63, 8, 40, 91, 66, 49, 94, 21],
      [24, 55, 58, 5, 66, 73, 99, 26, 97, 17, 78, 78, 96, 83, 14, 88, 34, 89, 63, 72],
      [21, 36, 23, 9, 75, 0, 76, 44, 20, 45, 35, 14, 0, 61, 33, 97, 34, 31, 33, 95],
      [78, 17, 53, 28, 22, 75, 31, 67, 15, 94, 3, 80, 4, 62, 16, 14, 9, 53, 56, 92],
      [16, 39, 5, 42, 96, 35, 31, 47, 55, 58, 88, 24, 0, 17, 54, 24, 36, 29, 85, 57],
      [86, 56, 0, 48, 35, 71, 89, 7, 5, 44, 44, 37, 44, 60, 21, 58, 51, 54, 17, 58],
      [19, 80, 81, 68, 5, 94, 47, 69, 28, 73, 92, 13, 86, 52, 17, 77, 4, 89, 55, 40],
      [4, 52, 8, 83, 97, 35, 99, 16, 7, 97, 57, 32, 16, 26, 26, 79, 33, 27, 98, 66],
      [88, 36, 68, 87, 57, 62, 20, 72, 3, 46, 33, 67, 46, 55, 12, 32, 63, 93, 53, 69],
      [4, 42, 16, 73, 38, 25, 39, 11, 24, 94, 72, 18, 8, 46, 29, 32, 40, 62, 76, 36],
      [20, 69, 36, 41, 72, 30, 23, 88, 34, 62, 99, 69, 82, 67, 59, 85, 74, 4, 36, 16],
      [20, 73, 35, 29, 78, 31, 90, 1, 74, 31, 49, 71, 48, 86, 81, 16, 23, 57, 5, 54],
      [1, 70, 54, 71, 83, 51, 54, 69, 16, 92, 33, 48, 61, 43, 52, 1, 89, 19, 67, 48]
    ];
    expect(greatestProduct(matrix)).toBe(51267216);
  });
});
