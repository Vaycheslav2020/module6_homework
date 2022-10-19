//  Задание 1.
console.log("// Задание 1.");

const ARRAY_MIX = [1, 20, 0, 55, 44, 654, 369, null, undefined, "258", 47, 0, "df", 0, 23,];
const ARRAY_MIX1 = ["JP", 20, { name: "Alex" }, 55, 26, 21, 369, null, undefined, "258", 47, 0, "df", 0, 23,];
const ARRAY_MIX2 = [false, true, 0, false, true, 0, false, null, 0, "true", false, 0, "df", 0, 23,];
let countZero = 0,
  countEven = 0,
  countOdd = 0,
  others = 0;

function checkingArray(arr) {
  for (let i = 0; i < arr.length; i++) {
    const el = arr[i];
    let num = typeof el;
    if (num === "number") {
      if (el === 0) {
        countZero += 1;
      } else if (el % 2 === 0) {
        countEven += 1;
      } else {
        countOdd += 1;
      }
    } else {
      others += 1;
    }
  }
  console.log(
    `кол-во нулей: ${countZero}, кол-во четных: ${countEven},  кол-во нечетных: ${countOdd}, остальные: ${others}`
  );
}
checkingArray(ARRAY_MIX);
checkingArray(ARRAY_MIX1);
checkingArray(ARRAY_MIX2);

//  Задание 2.
console.log("// Задание 2.");

function isPrime(num) {
  if (typeof num === "number" && !isNaN(num) && num <= 1000 && num >= 2) {
    let count = 0;
    for (let i = 1; i <= num; i++) {
      if (Number.isInteger(num / i)) {
        count += 1;
      }
    }
    if (count === 2) {
      return `${num} - Это простое число`;
    } else {
      return `${num} - это составное`;
    }
  } else {
    return "данные неверны!";
  }
}
console.log(isPrime(13));
console.log(isPrime(9));

//  Задание 3.
console.log("// Задание 3.");

let example = function (a) {
  return function func(b) {
    console.log(a + b);
  };
};
example(5)(5);

// Задание 4.
setTimeout(function(){
  console.log("// Задание 4.");
}, 900)

let aNumber1 = Number(window.prompt("введите число", ""));
let aNumber2 = Number(window.prompt("введите число", ""));

const intervalId = setInterval(() => {
  if (isNaN(aNumber1) || isNaN(aNumber2)) {
    alert("Введите число");
    resetInterval();
  }
  if (aNumber1 <= aNumber2) {
    console.log(aNumber1);
    aNumber1++;
  } else {
    resetInterval();
  }
}, 1000);
function resetInterval() {
  clearInterval(intervalId);
}

// Задание 5.
console.log("// Задание 5.");

const num1 = Number(window.prompt("введите число", ""));
const num2 = Number(window.prompt("введите число", ""));

let exponentiation = (x, n) => {
  let result = Math.pow(x, n);
  console.log(result);
};
exponentiation(num1, num2);
