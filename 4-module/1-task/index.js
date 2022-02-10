function makeFriendsList(friends) {
  const newUl = document.createElement('Ul')
  for (let index = 0; index < friends.length; index++) {
    let li = document.createElement("li");
    newUl.appendChild(li);
    li.innerHTML= `${friends[index].firstName} ${friends[index].lastName}`
  }
  return newUl
}
