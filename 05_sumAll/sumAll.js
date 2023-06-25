const sumAll = function (firstNum, secondNum) {
  let res = 0;
  let lowEnd, highEnd;

  if (typeof firstNum === "number" && typeof secondNum === "number") {
    if (firstNum > 0 && secondNum > 0) {
      if (firstNum < secondNum) {
        lowEnd = firstNum;
        highEnd = secondNum;
      } else {
        highEnd = firstNum;
        lowEnd = secondNum;
      }

      for (let i = lowEnd; i < highEnd + 1; i++) {
        res += i;
      }
      return res;
    } else {
      return "ERROR";
    }
  } else {
    return "ERROR";
  }
};

// Do not edit below this line
module.exports = sumAll;
