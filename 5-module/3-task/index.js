function initCarousel() {

  const container = document.querySelector('.container');
  const track = document.querySelector('.carousel');
  const items = document.querySelector('.carousel__inner');
  const btnPrev = document.querySelector('.carousel__arrow_left');
  const btnNext = document.querySelector('.carousel__arrow_right');
  let position = 0
  btnPrev.style.display = 'none'
  btnNext.addEventListener('click', () => {
    const itemWidth = items.offsetWidth
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
    const itemWidth = items.offsetWidth
    items.style.transform = `translateX(-${position-itemWidth}px)`
    if (position <=0 ) {
      btnPrev.style.display = 'none'
    }
     else {
      position-=itemWidth
     }
  }) 
}

  let currentSlideNumber = 0;
  let slidesAmount = 4;
  let elem = document.querySelector('[data-carousel-holder]');

  let carouselInnerElem = elem.querySelector('.carousel__inner');
  let carouselArrowRight = elem.querySelector('.carousel__arrow_right');
  let carouselArrowLeft = elem.querySelector('.carousel__arrow_left');

  update();

  elem.onclick = ({target}) => {
    if (target.closest('.carousel__arrow_right')) {
      next();
    }

    if (target.closest('.carousel__arrow_left')) {
      prev();
    }
  };

  function next() {
    currentSlideNumber++;
    update();
  }

  function prev() {
    currentSlideNumber--;
    update();
  }

  function update() {
    let offset = -carouselInnerElem.offsetWidth * currentSlideNumber;
    carouselInnerElem.style.transform = `translateX(${offset}px)`;

    if (currentSlideNumber == slidesAmount - 1) {
      carouselArrowRight.style.display = 'none';
    } else {
      carouselArrowRight.style.display = '';
    }

    if (currentSlideNumber == 0) {
      carouselArrowLeft.style.display = 'none';
    } else {
      carouselArrowLeft.style.display = '';
    }
  }
}

