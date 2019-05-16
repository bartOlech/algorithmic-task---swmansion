const array1 = [2,3,9,2,5,1,3,7,10];
const array2 = [2,1,3,4,3,10,6,6,1,7,10,10,10];

// chech if the number is prime
const isPrime = num => {
    for(let i = 2, s = Math.sqrt(num); i <= s; i++)
        if(num % i === 0) return false; 
    return num > 1;
}

// get the numbers from arr2 where duplication is a prime number
const selectDuplicatePrimeNumber = (array) => {
    const arrDuplicationNumbers = []
    const arrayWithAllPrimeNumbers = []

    for(let i = 0; i < array.length; i++) {
      let count = 0;
      for(let z = 0; z < array.length; z++) {
        if (array[z] === array[i]) count++;
      }
      arrDuplicationNumbers.push(count)
    }
    for(let i = 0; i < arrDuplicationNumbers.length; i++) {
        if(isPrime(arrDuplicationNumbers[i])) {
            arrayWithAllPrimeNumbers.push(array2[i])
        }
    }

    // remove duplicate elements from array
    const arrayPrimeNumber = [...new Set(arrayWithAllPrimeNumbers)]
    return arrayPrimeNumber
}

// return array1 without the prime numbers from duplication array2
const getArrWithoutPrimeNumber = (array1, array2) => {
    const arr = selectDuplicatePrimeNumber(array2);

    const myArray = array1.filter( ( el ) => !arr.includes( el ) );
    return myArray;
}

console.log(getArrWithoutPrimeNumber(array1, array2))