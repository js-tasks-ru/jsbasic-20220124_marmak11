function initCarousel() {
  const container = document.querySelector('.container');
  const track = document.querySelector('.carousel');
  const items = document.querySelector('.carousel__inner');
  const btnPrev = document.querySelector('.carousel__arrow_left');
  const btnNext = document.querySelector('.carousel__arrow_right');
  const itemWidth = 500
  let position = 0
  
  btnPrev.style.display = 'none'
  btnNext.addEventListener('click', () => {
    items.style.transform = `translateX(-${position+itemWidth}px)`
    btnPrev.style.display = 'flex'
    if (position >=itemWidth*2) {
      btnNext.style.display = 'none'
      position+=itemWidth
    }
     else {
      position+=itemWidth
     }
  })
  
  btnPrev.addEventListener('click', () => {
    items.style.transform = `translateX(-${position-itemWidth}px)`
    if (position <=0 ) {
      btnPrev.style.display = 'none'
    }
     else {
      position-=itemWidth
     }
  }) 
}