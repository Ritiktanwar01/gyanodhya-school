// Carousel State
let currentSlide = 0
const slides = document.querySelectorAll(".carousel-slide")
const indicators = document.querySelectorAll(".indicator")
const totalSlides = slides.length
let autoPlayInterval

// Initialize carousel
function init() {
  showSlide(0)
  startAutoPlay()
  setupEventListeners()
}

// Show specific slide
function showSlide(index) {
  // Remove active class from all slides and indicators
  slides.forEach((slide) => slide.classList.remove("active"))
  indicators.forEach((indicator) => indicator.classList.remove("active"))

  // Add active class to current slide and indicator
  slides[index].classList.add("active")
  indicators[index].classList.add("active")

  currentSlide = index
}

// Next slide
function nextSlide() {
  const next = (currentSlide + 1) % totalSlides
  showSlide(next)
  resetAutoPlay()
}

// Previous slide
function prevSlide() {
  const prev = (currentSlide - 1 + totalSlides) % totalSlides
  showSlide(prev)
  resetAutoPlay()
}

// Auto play functionality
function startAutoPlay() {
  autoPlayInterval = setInterval(() => {
    nextSlide()
  }, 5000) // Change slide every 5 seconds
}

function resetAutoPlay() {
  clearInterval(autoPlayInterval)
  startAutoPlay()
}

// Setup event listeners
function setupEventListeners() {
  // Next and Previous buttons
  document.querySelector(".carousel-btn.next").addEventListener("click", nextSlide)
  document.querySelector(".carousel-btn.prev").addEventListener("click", prevSlide)

  // Indicator buttons
  indicators.forEach((indicator, index) => {
    indicator.addEventListener("click", () => {
      showSlide(index)
      resetAutoPlay()
    })
  })

  // Keyboard navigation
  document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowRight") nextSlide()
    if (e.key === "ArrowLeft") prevSlide()
  })

  // Pause auto-play on hover
  document.querySelector(".carousel-wrapper").addEventListener("mouseenter", () => {
    clearInterval(autoPlayInterval)
  })

  document.querySelector(".carousel-wrapper").addEventListener("mouseleave", () => {
    startAutoPlay()
  })
}

// Initialize when DOM is ready
document.addEventListener("DOMContentLoaded", init)
