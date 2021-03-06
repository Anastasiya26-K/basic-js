const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (!Array.isArray(arr)) throw  Error;
  let newArr = ["--discard-next","--discard-prev","--double-next","--double-prev"];
  let transform = []
  for (let i = 0; i < newArr.length; i++) {
    if (arr[i]=="--discard-next"&&(i !== arr.length - 1)) {
      i++
    } else if (arr[i]=="--discard-prev"&&(i !== 0)) {
       transform.pop();
  } else if (arr[i]=="--double-next"&&(i !== arr.length - 1)) {
      transform.push(arr[i+1]);
  } else if (arr[i]=="--double-prev"&&(i !== 0)) {
        transform.push(arr[i-1]);
    }
  }
  return transform;
};
