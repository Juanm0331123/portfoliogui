/*Home Typing*/
let words = document.querySelectorAll('.word');

words.forEach((word) => {
  let letters = word.textContent.split('');
  word.textContent = '';
  letters.forEach((letter) => {
    let span = document.createElement('span');
    span.textContent = letter;
    span.className = 'letter';
    word.append(span);
  });
});

let currentWordIndex = 0;
let maxWordIndex = words.length - 1;

words[currentWordIndex].style.opacity = '1';

let changeText = () => {
  let currentWord = words[currentWordIndex];
  let nexWord =
    currentWordIndex === maxWordIndex ? words[0] : words[currentWordIndex + 1];
  Array.from(currentWord.children).forEach((letter, i) => {
    setTimeout(() => {
      letter.className = 'letter out';
    }, i * 80);
  });
  nexWord.style.opacity = '1';
  Array.from(nexWord.children).forEach((letter, i) => {
    letter.className = 'letter behind';
    setTimeout(() => {
      letter.className = 'letter in';
    }, 340 + i * 80);
  });
  currentWordIndex =
    currentWordIndex === maxWordIndex ? 0 : currentWordIndex + 1;
};

changeText();
setInterval(changeText, 3000);

/*Active Code Nav*/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove('active');
        document
          .querySelector('header nav a[href*=' + id + ']')
          .classList.add('active');
      });
    }
  });
  /*====== sticky navbar =====*/
  let header = document.querySelector('header');

  header.classList.toggle('sticky', window.scrollY > 100);
};

// Slider Code Design

var swiper = new Swiper('.mySwiper', {
  slidesPerView: 3,
  spaceBetween: 30,
  slidesPerGroup: 3,
  loop: true,
  loopFillGroupWithBlank: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
