function showSalary(users, age) {
  let user =(users.filter(item => item.age <= age))
  user =(user.map(item => `${item.name}, ${item.balance}`).join('\n'))
  return user
}
showSalary(users, 40) 