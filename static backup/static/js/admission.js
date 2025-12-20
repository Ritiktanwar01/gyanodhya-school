// Admission Form Submission
const admissionForm = document.getElementById("admissionForm")

if (admissionForm) {
  admissionForm.addEventListener("submit", (e) => {
    e.preventDefault()

    // Get form data
    const formData = new FormData(admissionForm)
    const data = Object.fromEntries(formData)

    // Get existing submissions or create empty array
    const submissions = JSON.parse(localStorage.getItem("admissionSubmissions") || "[]")

    // Add timestamp and ID
    data.id = Date.now()
    data.submittedAt = new Date().toISOString()

    // Save to localStorage
    submissions.push(data)
    localStorage.setItem("admissionSubmissions", JSON.stringify(submissions))

    // Show success message
    alert("Application submitted successfully! We will contact you soon.")

    // Reset form
    admissionForm.reset()
  })
}
