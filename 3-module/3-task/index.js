camelize('background-color')
camelize('list-style-image')
camelize('-webkit-transition')

function camelize(str) {
  let newArr = str.split("-")

    for (let index = 1; index < newArr.length; index++) {
      newArr[index] = newArr[index].charAt(0).toUpperCase() + newArr[index].slice(1)
      console.log(newArr)
    }
    
  return newArr.join("")
}
