function toggleText() {
  const btn = document.querySelector('.toggle-text-button')
  const a = document.querySelector('#text')
  btn.addEventListener('click', () => {
    a.hidden = !a.hidden
  })
}
