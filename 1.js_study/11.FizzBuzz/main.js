let arr = [];

for (let i = 1; i <= 100; i++) {
  const fizzBuzzStr = getFizzBuzz(i);
  arr.push(fizzBuzzStr);
}

for (let i = 1; i <= 100; i++) {
  console.log(arr[i]);
}

function getFizzBuzz(number) {
  if (number % 15 == 0) {
    return "FizzBuzz";
  } else if (number % 5 == 0) {
    return "Fizz";
  } else if (number % 3 == 0) {
    return "Buzz";
  } else {
    return number;
  }
}
