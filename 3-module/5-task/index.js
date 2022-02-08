function getMinMax(str) {
  str = str.split(" ")
  for (let index = 0; index < str.length; index++) {
    str[index] = +str[index] 
  }
  function getMaxOfArray(st) {
    return Math.max.apply(null, st);
  }
  function getMinOfArray(st) {
    return Math.min.apply(null, st);
  }
  let str1=str.filter(item => item)
  let result = {
    min: getMinOfArray(str1),
    max: getMaxOfArray(str1)
  }
  return result
}
const inputData = '1 и -5.8 или 10 хотя 34 + -5.3 и 73';

getMinMax(inputData)
