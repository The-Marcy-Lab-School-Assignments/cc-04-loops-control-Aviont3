//Write your solutions in this file, don't forget to test your functions.
const countFromOne = (num) => {
  for (let i = 1; i <= num; i++) {
    console.log(i);
  }
};
countEveryOdd = (num) => {
  for (let i = 1; i <= num; i++) {
    if (num % 2 !== 0) {
      console.log(i);
    }
  }
};
isNegative = (num) => {
  if (num > 0) {
    console.log(false);
  } else {
    console.log(true);
  }
};
betweenFiveAndTwenty = (num) => {
  if (5 < num < 20) {
    console.log("true");
  } else {
    console.log("false");
  }
};
sumOfThreeOrFive = () => {
  sum = 0;
  for (let i = 1; i <= 1000; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      return (sum += i);
    }
  }
  console.log(sum);
};
sumOfThreeOrFive();
