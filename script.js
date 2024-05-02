// Anonymous function & IIFE
(function(arr) {
    arr.forEach(function(num) {
        if (num % 2 !== 0) {
            console.log(num);
        }
    });
})([1, 2, 3, 4, 5, 6, 7, 8, 9]);

// Arrow function
const printOddNumbers = arr => {
    arr.forEach(num => {
        if (num % 2 !== 0) {
            console.log(num);
        }
    });
};
printOddNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9]);

// Anonymous function & IIFE
(function(arr) {
    const result = arr.map(function(str) {
        return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    });
    console.log(result);
})(["hello", "world", "example"]);

// Arrow function
const convertToTitleCaps = arr => {
    return arr.map(str => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase());
};
console.log(convertToTitleCaps(["hello", "world", "example"]));

// Anonymous function & IIFE
(function(arr) {
    const sum = arr.reduce(function(acc, curr) {
        return acc + curr;
    }, 0);
    console.log(sum);
})([1, 2, 3, 4, 5]);

// Arrow function
const sumArray = arr => {
    return arr.reduce((acc, curr) => acc + curr, 0);
};
console.log(sumArray([1, 2, 3, 4, 5]));

// Anonymous function & IIFE
(function(arr) {
    function isPrime(num) {
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) {
                return false;
            }
        }
        return num > 1;
    }
    const primes = arr.filter(function(num) {
        return isPrime(num);
    });
    console.log(primes);
})([1, 2, 3, 4, 5, 6, 7, 8, 9]);

// Arrow function
const getPrimeNumbers = arr => {
    const isPrime = num => {
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) {
                return false;
            }
        }
        return num > 1;
    };
    return arr.filter(num => isPrime(num));
};
console.log(getPrimeNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9]));

// Anonymous function & IIFE
(function(arr) {
    function isPalindrome(str) {
        const reversedStr = str.split("").reverse().join("");
        return str === reversedStr;
    }
    const palindromes = arr.filter(function(str) {
        return isPalindrome(str);
    });
    console.log(palindromes);
})(["radar", "hello", "level", "world", "noon"]);

// Arrow function
const getPalindromes = arr => {
    const isPalindrome = str => {
        const reversedStr = str.split("").reverse().join("");
        return str === reversedStr;
    };
    return arr.filter(str => isPalindrome(str));
};
console.log(getPalindromes(["radar", "hello", "level", "world", "noon"]));

//Anonymous function & IIFE
(function(arr) {
    const uniqueArray = arr.filter(function(item, index) {
        return arr.indexOf(item) === index;
    });
    console.log(uniqueArray);
})([1, 2, 2, 3, 4, 4, 5, 5]);

// Anonymous function & IIFE
(function(arr, k) {
    const rotations = k % arr.length;
    const rotatedArray = arr.slice(rotations).concat(arr.slice(0, rotations));
    console.log(rotatedArray);
})([1, 2, 3, 4, 5], 2);