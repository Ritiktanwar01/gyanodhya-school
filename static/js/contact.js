// Contact Form Submission
const contactForm = document.getElementById("contactForm")

if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault()

    // Get form data
    const formData = new FormData(contactForm)
    const data = Object.fromEntries(formData)

    // Get existing messages or create empty array
    const messages = JSON.parse(localStorage.getItem("contactMessages") || "[]")

    // Add timestamp and ID
    data.id = Date.now()
    data.submittedAt = new Date().toISOString()

    // Save to localStorage
    messages.push(data)
    localStorage.setItem("contactMessages", JSON.stringify(messages))

    // Show success message
    alert("Message sent successfully! We will get back to you soon.")

    // Reset form
    contactForm.reset()
  })
}
