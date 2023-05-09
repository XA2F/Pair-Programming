//easy
function Numbers(arr) {
  var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  var evenNumbers = arr.filter((number) => number % 2 == 0);
  console.log("even numbers" + evenNumbers);
  var oddNumbers = arr.filter((number) => number % 2 !== 0);
  console.log("Odd numbers" + oddNumbers);
}
Numbers();

//easy 2
function isPrime(element) {
  for (var i = 2; i < element; i++) {
    if (element % i === 0) {
      return false;
    }
  }
  return element !== 1;
}

var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 17, 25, 30];
var primes = array.filter(isPrime);

console.log("array: " + array);
console.log("primes: " + primes);

medium;
function vowelChecker(x) {
  //VowelChecker will grab the first letter (character). . .
  var firstChar = x.toLowerCase().charAt(0);

  // then check if that first letter is a vowel

  if (
    firstChar === "a" ||
    firstChar === "e" ||
    firstChar === "i" ||
    firstChar === "o" ||
    firstChar === "u"
  ) {
    console.log("This is a vowel");
  } else {
    console.log("This is not a vowel");
  }
}

vowelChecker("b");

//medium2
function checkStringsAnagram(a, b) {
  let len1 = a.length;
  let len2 = b.length;
  if (len1 !== len2) {
    console.log("Invalid Input");
    return;
  }
  let str1 = a.split("").sort().join("");
  let str2 = b.split("").sort().join("");
  if (str1 === str2) {
    console.log("True");
  } else {
    console.log("False");
  }
}
checkStringsAnagram("indian", "ndiani");

//Medium(3)
let num1 = 336;
let num2 = 360;
function largestDivisor(num1, num2) {
  // let num1 = 336;
  // let num2 = 360;
  let divisor = 1;
  // We start with a divisor of 1.
  for (let i = 1; i <= Math.min(num1, num2); i++) {
    // We loop from 1 up to the smallest of the two numbers.
    if (num1 % i === 0 && num2 % i === 0) {
      // If i divides both numbers without a remainder, we update the divisor.
      divisor = i;
    }
  }
  return divisor;
  // We return the largest common divisor.
}
console.log(largestDivisor(num1, num2));
let num1 = 2;
let num2 = 3;

largestDivisor(num1);

medium4;
let Car = {
  make: "Ford",
  model: "Raptor",
  year: 2014,
  milage: "200",
  color: "red",
  // creating driveToWork method
  driveToWork: function () {
    console.log("driveToWork");
    // setting new milage to 33 miles
    this.milage = "33 miles";
    console.log("New Milage : " + this.milage);
  },
  // creating driveAroundTheWorld method
  driveAroundTheWorld: function () {
    console.log("\n");
    console.log("driveAroundTheWorld");
    // printing old milage
    console.log("Old milage : " + this.milage);
    // setting new milage to 24000 miles
    this.milage = "24000 miles";
    console.log("New Milage : " + this.milage);
  },
  // creating runErrands method
  runErrands: function () {
    // console.log('\n')
    // console.log('runErrands');
    // printing old milage
    this.milage = "30 miles";
    console.log("Old milage : " + (Car.mileage + this.milage));
    // setting new milage to 30 miles
    // this.milage = '30 miles'
    // console.log('New Milage : ' + this.milage);
  },
};

Car.runErrands();

// let str = ["{},[],()"];

// function brackets(str) {
//   if (str.indexOf("{},[],()")) {
//     console.log(Boolean);
//   } else {
//     console.log(brackets("{hello}"));
//   }
// }
// brackets(str);

// Hard (1)
// Write a function that takes in a string and returns a boolean value whether or not the string contains a pair of matching brackets ({}, [], ()). These brackets must be nested appropriately in order to return a true value
// Example 1:
// Input: str = “{hello world}” brackets(srt)
// Output: True

// Example 2:
// Input: str = “{hello world]” brackets(srt)
// Output: False

function brackets(str) {
  let stack = [];
  let bracketsMap = {
    "}": "{",
    "]": "[",
    ")": "(",
  };

  for (let i = 0; i < str.length; i++) {
    let bracket = str[i];

    if (bracket === "{" || bracket === "[" || bracket === "(") {
      stack.push(bracket);
    } else if (bracket === "}" || bracket === "]" || bracket === ")") {
      let lastBracket = stack.pop();

      if (bracketsMap[bracket] !== lastBracket) {
        return false;
      }
    }
  }

  return stack.length === 0;
}
