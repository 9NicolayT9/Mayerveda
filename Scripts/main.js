// Шапка меню при скролле
(function () {
  const header = document.querySelector('.header');

  window.onscroll = () => {
    if (window.pageYOffset > 100) {
      header.classList.add('header__active');
    } else {
      header.classList.remove('header__active');
    }
  };
})(); // Открывающееся меню nav


const nav__menu = document.querySelector('.nav__menu');
Array.from(nav__menu.children).forEach(element => {
  if (element.classList.contains('li__dop')) {
    element.addEventListener('click', e => {
      if (!element.querySelector('.dop__menu').classList.contains('menu__active')) {
        element.querySelector('.dop__menu').classList.add('menu__active');
        element.querySelector('.title').classList.add('title__active');
        element.classList.add('active__li');
      } else if (element.querySelector('.dop__menu').classList.contains('menu__active')) {
        element.querySelector('.dop__menu').classList.remove('menu__active');
        element.querySelector('.title').classList.remove('title__active');
        element.classList.remove('active__li');
      }
    });
  }
}); // Play video

const text = document.querySelector(".circle__text__video p");
text.style.display = 'block';
text.innerHTML = text.innerText.split("").map((letter, i) => `<span style="transform:rotate(${i * 18}deg")>${letter}</span>`).join("");
const btn__video = document.getElementById('btn__video');
const video = document.querySelector('.bg__video');
var new__frame = null;
btn__video.addEventListener('click', () => {
  new__frame = window.open("", "Video", "width=0, height=0, resizable=yes");
  new__frame.document.write(`
        <div class="video__media">
            <video class="bg__video" src="Photos/Video/mayrveda_promo_new.mp4" muted loop autoplay controls></video>
        </div>`);
  new__frame.document.querySelector('.bg__video').addEventListener('loadedmetadata', e => {
    new__frame.document.querySelector('.bg__video').currentTime = video.currentTime;
  });
}); // Раскрытие карточек

const content__card = document.querySelectorAll('.content__card');
content__card.forEach(element => {
  element.querySelector('.more__info').addEventListener('click', () => {
    if (!element.classList.contains('content__active')) {
      element.classList.add('content__active');
    } else if (element.classList.contains('content__active')) {
      element.classList.remove('content__active');
    }
  });
}); // Откртыие табов в галерее

const tab__btn1 = document.getElementById('tab__btn1');
const tab__btn2 = document.getElementById('tab__btn2');
const tab__btn3 = document.getElementById('tab__btn3');
const tab__btn4 = document.getElementById('tab__btn4');
const tab__btn5 = document.getElementById('tab__btn5');
const tab__btn6 = document.getElementById('tab__btn6');
const tab__btn7 = document.getElementById('tab__btn7');
const tab__btn8 = document.getElementById('tab__btn8');
const content__1 = document.getElementById('content__1');
const content__2 = document.getElementById('content__2');
const content__3 = document.getElementById('content__3');
const content__4 = document.getElementById('content__4');
const content__5 = document.getElementById('content__5');
const content__6 = document.getElementById('content__6');
const content__7 = document.getElementById('content__7');
const content__8 = document.getElementById('content__8');
var tabs = [tab__btn1, tab__btn2, tab__btn3, tab__btn4, tab__btn5, tab__btn6, tab__btn7, tab__btn8];
var contents = [content__1, content__2, content__3, content__4, content__5, content__6, content__7, content__8];

function tab__content(tab, content) {
  tabs.forEach(element => {
    element.classList.remove('active__tab');
  });
  contents.forEach(element => {
    element.classList.remove('active__content');
  });
  tab.classList.add('active__tab');
  content.classList.add('active__content');
}

tab__content(tab__btn1, content__1);
tab__btn1.addEventListener('click', () => tab__content(tab__btn1, content__1));
tab__btn2.addEventListener('click', () => tab__content(tab__btn2, content__2));
tab__btn3.addEventListener('click', () => tab__content(tab__btn3, content__3));
tab__btn4.addEventListener('click', () => tab__content(tab__btn4, content__4));
tab__btn5.addEventListener('click', () => tab__content(tab__btn5, content__5));
tab__btn6.addEventListener('click', () => tab__content(tab__btn6, content__6));
tab__btn7.addEventListener('click', () => tab__content(tab__btn7, content__7));
tab__btn8.addEventListener('click', () => tab__content(tab__btn8, content__8)); // Swiper

const Gallery1 = new Swiper('.gallery1__slider', {
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },
  slidesPerView: 3,
  spaceBetween: 200,
  centeredSlides: true
});
const Gallery2 = new Swiper('.gallery2__slider', {
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },
  slidesPerView: 3,
  spaceBetween: 200,
  centeredSlides: true
});
const Gallery3 = new Swiper('.gallery3__slider', {
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },
  slidesPerView: 3,
  spaceBetween: 200,
  centeredSlides: true
});
const Gallery4 = new Swiper('.gallery4__slider', {
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },
  slidesPerView: 3,
  spaceBetween: 200,
  centeredSlides: true
});
const Gallery5 = new Swiper('.gallery5__slider', {
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },
  slidesPerView: 3,
  spaceBetween: 200,
  centeredSlides: true
});
const Gallery6 = new Swiper('.gallery6__slider', {
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },
  slidesPerView: 3,
  spaceBetween: 200,
  centeredSlides: true
});
const Gallery7 = new Swiper('.gallery7__slider', {
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },
  slidesPerView: 3,
  spaceBetween: 200,
  centeredSlides: true
});
const Gallery8 = new Swiper('.gallery8__slider', {
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },
  slidesPerView: 3,
  spaceBetween: 200,
  centeredSlides: true
});
const News = new Swiper('.news__slider', {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },
  spaceBetween: 40,
  slidesPerView: 3
});
const Achivments = new Swiper('.achievments__slider', {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },
  spaceBetween: 40,
  slidesPerView: 3
});
const Reviews = new Swiper('.reviews__slider', {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },
  spaceBetween: 40,
  slidesPerView: 3
});
const AboutUs = new Swiper('.about__us__slider', {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },
  spaceBetween: 40,
  slidesPerView: 3
}); // Галерея

window.addEventListener('DOMContentLoaded', function () {
  new SmartPhoto(".js-smartPhoto");
}); // Все карточки Номеров

const btn__show = document.querySelector('.more__cards__rooms');
const arrow__btn__show = document.querySelector('.arrow__btn__show');
const card__dop = document.querySelectorAll('.card__dop');
btn__show.addEventListener('click', () => {
  card__dop.forEach(card => card.classList.toggle('card__dop'));
  arrow__btn__show.classList.toggle('active__show__arrow');
}); // Accordion

const accordion = document.querySelectorAll('.accordion');
accordion.forEach(element => {
  const content = element.querySelector('.content');
  element.querySelector('.accordion__button').addEventListener('click', () => {
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
});
//# sourceMappingURL=main.js.map
