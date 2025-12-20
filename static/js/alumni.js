// Alumni Registration Form
const alumniForm = document.getElementById("alumniForm")

if (alumniForm) {
  alumniForm.addEventListener("submit", (e) => {
    e.preventDefault()

    // Get form data
    const formData = new FormData(alumniForm)
    const data = Object.fromEntries(formData)

    // Get existing registrations or create empty array
    const registrations = JSON.parse(localStorage.getItem("alumniRegistrations") || "[]")

    // Add timestamp and ID
    data.id = Date.now()
    data.registeredAt = new Date().toISOString()

    // Save to localStorage
    registrations.push(data)
    localStorage.setItem("alumniRegistrations", JSON.stringify(registrations))

    // Show success message
    alert("Registration successful! Welcome back to the Gurukul family.")

    // Reset form
    alumniForm.reset()
  })
}
