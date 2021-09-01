// Write a recursive function to print out all of the characters in a string.
function printString(myString) {
    console.log(myString.slice(0, 1));
    if (myString.length > 1) {
        printString(myString.slice(1))
    }
  }
  
  printString("pizza");

// Write out a recursive function to reverse a string.

function reverseString(string) {
    if (string.length === 1) {
        return string
    }
    return string[string.length - 1] + reverseString(string.slice(0, -1))
}

console.log(reverseString('racecar'))

// Write out a recursive function to see if a word is a palindrome.

function isPalindrome(str) {
    if (str.length === 1) {
        // console.log(str)
        return true
    } else if (str.length === 2 && str[0] === str.slice(-1)) {
        return true
    }
    if (str[0] === str.slice(-1)) {
        // console.log(str.slice(1, -1))
        return isPalindrome(str.slice(1, -1))
    } 
    return false
}

console.log(isPalindrome('racecar'))
console.log(isPalindrome('I'))
console.log(isPalindrome('hello'))
console.log(isPalindrome('asdfdsa'))

// Write a recursive function to find the largest integer in an array.

function maxOf(arr) {
    if (arr.length === 1) {
        return arr[0]
    }
    if (arr[0] >= arr[arr.length-1]) {
        arr.pop()
        return maxOf(arr)
    } else {
        arr.shift()
        return maxOf(arr)
    }
}

// console.log(maxOf([23, 2, 6, 44, 10, -1, 0]))
// console.log(maxOf([23, 2, 6, 44, 6, 23, 0]))
// console.log(maxOf([23, 2, 99, 44, 6, -1, 100]))

// Write out a function to see if an array includes a given element.

function includesNumber(arr, ele) {
    if (arr.length === 0) {
        return false
    }
    if (arr[0] === ele) {
        return true
    } else {
        return includesNumber(arr.slice(1), ele)
    }
}

// console.log(includesNumber(['hello', 'Carlos', 23, 'donkey'], 'Carlos'))
// console.log(includesNumber(['five', '5', 5, '55555'], 5))
// console.log(includesNumber(['bye', 'goodbye', 'adios', 'by'], 'by'))
// console.log(includesNumber(['bye', 'goodbye', 'adios', 'by'], 'hello?'))

// Given an array and an index, write a recursive function to add up the elements of an array.

function addUpTo(arr, i) {
    if (i === 0) {
        return arr[0]
    }
    return arr[0] + addUpTo(arr.slice(1), i - 1)
}