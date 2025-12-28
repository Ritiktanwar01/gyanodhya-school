
const mobileToggle = document.getElementById("mobileToggle")
const navMenu = document.getElementById("navMenu")
const headerSM = document.getElementById("header-sm")

if (mobileToggle) {
  mobileToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active")
    headerSM.classList.toggle("hide")
  })
}

// Close mobile menu when clicking on a link
document.querySelectorAll(".nav-menu a").forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("active")
    headerSM.classList.remove("hide")
    headerSM.classList.add("bg-secondary")
  })
})

// Get Quote WhatsApp Button
// const getQuoteBtn = document.getElementById("whatsappbtn")
// if (getQuoteBtn) {
//   getQuoteBtn.addEventListener("click", (e) => {
//     e.preventDefault()
//     // Gyanda Public School WhatsApp number
//     const phoneNumber = "919893208095" // +91 98932-08095
//     const message = "Hii"
//     const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
//     window.open(whatsappURL, "_blank")
//   })
// }

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()
    const target = document.querySelector(this.getAttribute("href"))
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  })
})


const slides = document.querySelectorAll('.carousel-slide');
const prevBtn = document.querySelector('.carousel-btn.prev');
const nextBtn = document.querySelector('.carousel-btn.next');
const dotsContainer = document.getElementById('dotsContainer');

let currentSlide = 0;
const totalSlides = slides.length;

// Show slide
function showSlide(n) {
  slides.forEach(slide => slide.classList.remove('active'));
  const dots = document.querySelectorAll('.indicator');
  dots.forEach(dot => dot.classList.remove('active'));

  slides[n].classList.add('active');
  dots[n].classList.add('active');
}

// Next slide
function nextSlide() {
  currentSlide = (currentSlide + 1) % totalSlides;
  showSlide(currentSlide);
}

// Previous slide
function prevSlide() {
  currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
  showSlide(currentSlide);
}

// Go to specific slide
function goToSlide(n) {
  currentSlide = n;
  showSlide(currentSlide);
}

// Run autoplay just once
function runAutoPlayOnce() {
  setTimeout(() => {
    nextSlide(); // move forward once
  }, 3000); // delay in ms (3 seconds here)
}

// Event listeners
prevBtn.addEventListener('click', prevSlide);
nextBtn.addEventListener('click', nextSlide);

document.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowLeft') prevSlide();
  if (e.key === 'ArrowRight') nextSlide();
});

// Initialize
showSlide(0);
runAutoPlayOnce(); // autoplay only once


const slides_2 = document.querySelectorAll('.carousel-slide-2');
const prevBtn_2 = document.querySelector('.carousel-btn-2.prev-2');
const nextBtn_2 = document.querySelector('.carousel-btn-2.next-2');
const dotsContainer_2 = document.getElementById('dotsContainer-2');

let currentSlide_2 = 0;
const totalSlides_2 = slides_2.length;

// Show slide
function showSlide_2(n) {
  slides_2.forEach(slide => slide.classList.remove('active-2'));
  const dots_2 = document.querySelectorAll('.indicator-2');
  dots_2.forEach(dot => dot.classList.remove('active-2'));

  slides_2[n].classList.add('active-2');
  dots_2[n].classList.add('active-2');
}

// Next slide
function nextSlide() {
  currentSlide_2 = (currentSlide_2 + 1) % totalSlides_2;
  showSlide_2(currentSlide_2);
}

// Previous slide
function prevSlide() {
  currentSlide_2 = (currentSlide_2 - 1 + totalSlides_2) % totalSlides_2;
  showSlide_2(currentSlide_2);
}

// Go to specific slide
function goToSlide(n) {
  currentSlide_2 = n;
  showSlide_2(currentSlide_2);
}

// Run autoplay just once
function runAutoPlayOnce_2() {
  setTimeout(() => {
    nextSlide();
  }, 3000);
}

// Event listeners
prevBtn_2.addEventListener('click', prevSlide);
nextBtn_2.addEventListener('click', nextSlide);

document.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowLeft') prevSlide();
  if (e.key === 'ArrowRight') nextSlide();
});

// Initialize
showSlide_2(0);
runAutoPlayOnce_2(); // autoplay only once


// image gallery carousel
const slides_4 = document.querySelectorAll('.carousel-slide-4');
const prevBtn_4 = document.querySelector('.carousel-btn.prev-4');
const nextBtn_4 = document.querySelector('.carousel-btn.next-4');
const dotsContainer_4 = document.getElementById('dotsContainer-4');

let currentSlide_4 = 0;
const totalSlides_4 = slides.length;

// Show slide
function showSlide_4(n) {
  slides_4.forEach(slide => slide.classList.remove('active-4'));
  const dots_4 = document.querySelectorAll('.indicator-4');
  dots_4.forEach(dot => dot.classList.remove('active-4'));

  slides_4[n].classList.add('active-4');
  dots_4[n].classList.add('active-4');
}

// Next slide
function nextSlide_4() {
  currentSlide = (currentSlide + 1) % totalSlides;
  showSlide_4(currentSlide);
}

// Previous slide
function prevSlide_4() {
  currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
 showSlide_4(currentSlide);
}

// Go to specific slide
function goToSlide(n) {
  currentSlide = n;
  showSlide_4(currentSlide);
}

// Run autoplay just once
function runAutoPlayOnce_4() {
  setTimeout(() => {
    nextSlide_4(); // move forward once
  }, 3000); // delay in ms (3 seconds here)
}

// Event listeners
prevBtn.addEventListener('click', prevSlide);
nextBtn.addEventListener('click', nextSlide);

document.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowLeft') prevSlide();
  if (e.key === 'ArrowRight') nextSlide_4();
});

// Initialize
showSlide_4(0);
runAutoPlayOnce_4(); // autoplay only once


const slides_3 = document.querySelectorAll('.carousel-slide-3');
const prevBtn_3 = document.querySelector('.carousel-btn-3');
const nextBtn_3 = document.querySelector('.carousel-btn-3.next-3');
const dotsContainer_3 = document.getElementById('dotsContainer_3');

let currentSlide_3 = 0;
const totalSlides_3 = slides_3.length;

// Show slide
function showSlide_3(n) {
  slides_3.forEach(slide => slide.classList.remove('active-3'));
  const dots_3 = document.querySelectorAll('.indicator-3');
  dots_3.forEach(dot => dot.classList.remove('active-3'));

  slides_3[n].classList.add('active-3');
  dots_3[n].classList.add('active-3');
}

// Next slide
function nextSlide() {
  currentSlide_3 = (currentSlide_3 + 1) % totalSlides_3;
  showSlide_3(currentSlide_3);
}

// Previous slide
function prevSlide() {
  currentSlide_3 = (currentSlide_3 - 1 + totalSlides_3) % totalSlides_3;
  showSlide_3(currentSlide_3);
}

// Go to specific slide
function goToSlide(n) {
  currentSlide_3 = n;
  showSlide_3(currentSlide_3);
}

// Run autoplay just once
function runAutoPlayOnce_3() {
  setTimeout(() => {
    nextSlide();
  }, 3000);
}

// Event listeners
prevBtn_3.addEventListener('click', prevSlide);
nextBtn_3.addEventListener('click', nextSlide);

document.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowLeft') prevSlide();
  if (e.key === 'ArrowRight') nextSlide();
});

// Initialize
showSlide_3(0);
runAutoPlayOnce_3(); // autoplay only once