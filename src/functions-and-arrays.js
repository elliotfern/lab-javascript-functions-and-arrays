// Iteration #1: Find the maximum
function maxOfTwoNumbers(num1, num2) {
  if (num1 > num2) {
    return num1;
  } else {
    return num2;
  }
}

// Prueba console
console.log("Resultado iteración #1: " + maxOfTwoNumbers(99, 9)); // resultado previsto: 99

// Iteration #2: Find longest word
const words = [
  "mystery",
  "brother",
  "aviator",
  "crocodile",
  "pearl",
  "orchard",
  "crackpot",
];

function findLongestWord(array) {
  let longestWord = "";

  if (array.length === 0) {
    return null;
  }

  for (let i = 0; i < array.length; i++) {
    if (array[i].length > longestWord.length) {
      longestWord = array[i];
    }
  }
  return longestWord;
}

// prueba console log
console.log("Resultado iteración #2: " + findLongestWord(words)); // el resultado debería ser crocodrile

// Iteration #3: Calculate the sum
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(numbers) {
  let suma = 0;
  if (numbers.length === 0) {
    return 0;
  }

  for (let i = 0; i < numbers.length; i++) {
    suma += numbers[i];
  }
  return suma;
}

// prueba console
console.log("Resultado iteración #3.1: " + sumNumbers(numbers)); //el resultado debería ser 87
console.log("Resultado iteración #3.1: " + sumNumbers([])); // el resultado será 0

// Iteration #3.2 Bonus:
function sum(array) {
  if (array.length === 0) {
    return 0;
  }

  sumaTotal = 0;
  for (let i = 0; i < array.length; i++) {
    if (typeof array[i] === "number") {
      sumaTotal += array[i];
    } else if (typeof array[i] === "string") {
      sumaTotal += array[i].length;
    } else if (typeof array[i] === "boolean") {
      sumaTotal += array[i];
    } else if (typeof array[i] === "object" || typeof array[i] === "array") {
      return new Error("Tipo de dato no permitido");
    }
  }
  return sumaTotal;
}

const mixedArr = [6, 12, "miami", 1, true, "barca", "200", "lisboa", 8, 10];

const mixedArr4 = [
  6,
  12,
  "miami",
  1,
  ["eeee"],
  "barca",
  "200",
  "lisboa",
  8,
  10,
];

// prueba console
console.log("Resultado iteración #3.2: " + sum(mixedArr)); // el resultado debería ser 57
console.log("Resultado iteración #3.2: " + sum(mixedArr4)); // debería mostrar el mensaje de error por ser un array

// Iteration #4: Calculate the average
// Level 1: Array of numbers

const numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(array) {
  if (array.length === 0) {
    return null;
  }

  let sumaTotal = sumNumbers(array);
  return sumaTotal / array.length;
}

// prueba console
console.log("Resultado iteración #4.1: " + averageNumbers(numbersAvg)); // el resultado es 6

// Level 4.2: Array of strings
const wordsArr = [
  "seat",
  "correspond",
  "linen",
  "motif",
  "hole",
  "smell",
  "smart",
  "chaos",
  "fuel",
  "palace",
];

function averageWordLength(array) {
  let totalLongitud = 0;
  if (array.length === 0) {
    return null;
  }

  for (let i = 0; i < array.length; i++) {
    totalLongitud += array[i].length;
  }

  return totalLongitud / array.length;
}

// prueba console
console.log("Resultado iteración #4.2: " + averageWordLength(wordsArr)); // resultado 5.3

// Bonus - Iteration #4.3
function avg(arr) {
  if (arr.length === 0) {
    return null;
  }

  let sumaTotal = 0;
  let contador = 0;

  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "number") {
      sumaTotal += arr[i];
      contador++;
    } else if (typeof arr[i] === "string") {
      sumaTotal += arr[i].length;
      contador++;
    } else if (typeof arr[i] === "boolean") {
      if (arr[i] === true) {
        sumaTotal += 1;
        contador++;
      } else {
        sumaTotal += 0;
        contador++;
      }
    }
  }

  return sumaTotal / contador;
}

const mixedArr2 = [6, 12, "miami", 1, true, "barca", "200", "lisboa", 8, 10];

// comprobacion console
console.log("Resultado iteración #4.3: " + avg(mixedArr2));
5.7;

// Iteration #5: Unique arrays
const wordsUnique = [
  "crab",
  "poison",
  "contagious",
  "simple",
  "bring",
  "sharp",
  "playground",
  "poison",
  "communion",
  "simple",
  "bring",
];

function uniquifyArray(array) {
  if (array.length === 0) {
    return null;
  }

  const nuevaArray = [];

  for (let i = 0; i < array.length; i++) {
    if (!nuevaArray.includes(array[i])) {
      nuevaArray.push(array[i]);
    }
  }

  return nuevaArray;
}

// comprobación console
console.log("Resultado iteración #5: " + uniquifyArray(wordsUnique)); // resultado: crab, poision, contagius, simple,bring, sharp, playground, poison, communion

// Iteration #6: Find elements
const wordsFind = [
  "machine",
  "subset",
  "trouble",
  "starting",
  "matter",
  "eating",
  "truth",
  "disobedience",
];

function doesWordExist(array, search) {
  if (array.length === 0) {
    return null;
  }

  for (let i = 0; i < array.length; i++) {
    if (array[i] === search) {
      return true;
    }
  }

  return false;
}

// comprobacion en la console
console.log(
  "Resultado iteración #6: " + doesWordExist(wordsFind, "disobedience")
); // resultado esperado: true
console.log("Resultado iteración #6: " + doesWordExist(wordsFind, "banana")); // resultado esperado: false
console.log("Resultado iteración #6: " + doesWordExist("", "banana")); // resultado esperado: null

// Iteration #7: Count repetition
const wordsCount = [
  "machine",
  "matter",
  "subset",
  "trouble",
  "starting",
  "matter",
  "eating",
  "matter",
  "truth",
  "disobedience",
  "matter",
];

function howManyTimes(array, search) {
  if (array.length === 0) {
    return 0;
  }

  let contador = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === search) {
      contador++;
    }
  }

  return contador;
}

// comprobacion en la console
console.log("Resultado iteración #7: " + howManyTimes(wordsCount, "matter")); // resultado esperado: 4
console.log("Resultado iteración #7: " + howManyTimes(wordsCount, "eating")); // resultado esperado: 1
console.log("Resultado iteración #7: " + howManyTimes("", "truth")); // resultado esperado: 0

// Iteration #8: Bonus
const matrix = [
  [8, 2, 22, 97, 38, 15, 0, 40, 0, 75, 4, 5, 7, 78, 52, 12, 50, 77, 91, 8],
  [
    49, 49, 99, 40, 17, 81, 18, 57, 60, 87, 17, 40, 98, 43, 69, 48, 4, 56, 62,
    0,
  ],
  [
    81, 49, 31, 73, 55, 79, 14, 29, 93, 71, 40, 67, 53, 88, 30, 3, 49, 13, 36,
    65,
  ],
  [52, 70, 95, 23, 4, 60, 11, 42, 69, 24, 68, 56, 1, 32, 56, 71, 37, 2, 36, 91],
  [
    22, 31, 16, 71, 51, 67, 63, 89, 41, 92, 36, 54, 22, 40, 40, 28, 66, 33, 13,
    80,
  ],
  [
    24, 47, 32, 60, 99, 3, 45, 2, 44, 75, 33, 53, 78, 36, 84, 20, 35, 17, 12,
    50,
  ],
  [
    32, 98, 81, 28, 64, 23, 67, 10, 26, 38, 40, 67, 59, 54, 70, 66, 18, 38, 64,
    70,
  ],
  [
    67, 26, 20, 68, 2, 62, 12, 20, 95, 63, 94, 39, 63, 8, 40, 91, 66, 49, 94,
    21,
  ],
  [
    24, 55, 58, 5, 66, 73, 99, 26, 97, 17, 78, 78, 96, 83, 14, 88, 34, 89, 63,
    72,
  ],
  [21, 36, 23, 9, 75, 0, 76, 44, 20, 45, 35, 14, 0, 61, 33, 97, 34, 31, 33, 95],
  [78, 17, 53, 28, 22, 75, 31, 67, 15, 94, 3, 80, 4, 62, 16, 14, 9, 53, 56, 92],
  [
    16, 39, 5, 42, 96, 35, 31, 47, 55, 58, 88, 24, 0, 17, 54, 24, 36, 29, 85,
    57,
  ],
  [86, 56, 0, 48, 35, 71, 89, 7, 5, 44, 44, 37, 44, 60, 21, 58, 51, 54, 17, 58],
  [
    19, 80, 81, 68, 5, 94, 47, 69, 28, 73, 92, 13, 86, 52, 17, 77, 4, 89, 55,
    40,
  ],
  [4, 52, 8, 83, 97, 35, 99, 16, 7, 97, 57, 32, 16, 26, 26, 79, 33, 27, 98, 66],
  [
    88, 36, 68, 87, 57, 62, 20, 72, 3, 46, 33, 67, 46, 55, 12, 32, 63, 93, 53,
    69,
  ],
  [
    4, 42, 16, 73, 38, 25, 39, 11, 24, 94, 72, 18, 8, 46, 29, 32, 40, 62, 76,
    36,
  ],
  [
    20, 69, 36, 41, 72, 30, 23, 88, 34, 62, 99, 69, 82, 67, 59, 85, 74, 4, 36,
    16,
  ],
  [
    20, 73, 35, 29, 78, 31, 90, 1, 74, 31, 49, 71, 48, 86, 81, 16, 23, 57, 5,
    54,
  ],
  [
    1, 70, 54, 71, 83, 51, 54, 69, 16, 92, 33, 48, 61, 43, 52, 1, 89, 19, 67,
    48,
  ],
];

function greatestProduct(matrix) {
  const filas = matrix.length;
  const columnas = matrix[0].length;
  let productoMayor = 0;

  for (let i = 0; i < filas; i++) {
    for (let j = 0; j < columnas; j++) {
      // analizar en horizontal
      if (j + 3 < columnas) {
        const producto =
          matrix[i][j] * matrix[i][j + 1] * matrix[i][j + 2] * matrix[i][j + 3];
        if (producto > productoMayor) {
          productoMayor = producto;
        }
      }

      // analizar en vertical
      if (i + 3 < filas) {
        const producto =
          matrix[i][j] * matrix[i + 1][j] * matrix[i + 2][j] * matrix[i + 3][j];
        if (producto > productoMayor) {
          productoMayor = producto;
        }
      }
    }
  }

  return productoMayor;
}

// prueba resultado en la console
console.log("Resultado iteración #8 Bonus: " + greatestProduct(matrix)); // resultado en consola: 51267216

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== "undefined") {
  module.exports = {
    maxOfTwoNumbers,
    findLongestWord,
    sumNumbers,
    sum,
    averageNumbers,
    averageWordLength,
    avg,
    uniquifyArray,
    doesWordExist,
    howManyTimes,
    greatestProduct,
  };
}
