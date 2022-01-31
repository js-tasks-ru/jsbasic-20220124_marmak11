function checkSpam(str) {
  str1= str.toLowerCase()
  str1=str1.includes("1xbet")|| str1.includes("xxx")
  console.log(str1)
  return str1
}

checkSpam("xxxxx")