// Mobile Menu Toggle
const mobileToggle = document.getElementById("mobileToggle")
const navMenu = document.getElementById("navMenu")

if (mobileToggle) {
  mobileToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active")
  })
}

// Close mobile menu when clicking on a link
document.querySelectorAll(".nav-menu a").forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("active")
  })
})

// Get Quote WhatsApp Button
const getQuoteBtn = document.getElementById("getQuote")
if (getQuoteBtn) {
  getQuoteBtn.addEventListener("click", (e) => {
    e.preventDefault()
    // Gyanda Public School WhatsApp number
    const phoneNumber = "919893208095" // +91 98932-08095
    const message = "Hii"
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(whatsappURL, "_blank")
  })
}

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
