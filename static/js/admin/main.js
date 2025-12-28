// Global Admin Interactions
document.addEventListener("DOMContentLoaded", () => {
  const mobileMenuToggle = document.querySelector(".mobile-menu-toggle")
  const sidebar = document.querySelector(".sidebar")
  const sidebarOverlay = document.querySelector(".sidebar-overlay")

  if (mobileMenuToggle) {
    mobileMenuToggle.addEventListener("click", () => {
      sidebar.classList.toggle("active")
      sidebarOverlay.classList.toggle("active")
    })
  }

  if (sidebarOverlay) {
    sidebarOverlay.addEventListener("click", () => {
      sidebar.classList.remove("active")
      sidebarOverlay.classList.remove("active")
    })
  }

  // Delete Confirmation
  const deleteButtons = document.querySelectorAll(".btn-delete")

  deleteButtons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const confirmed = confirm("Are you sure you want to delete this item? This action cannot be undone.")
      if (confirmed) {
        // In a real app, you'd make an API call here
        // For this static prototype, we'll just remove the row
        const row = e.target.closest("tr") || e.target.closest(".card")
        if (row) {
          row.style.opacity = "0"
          setTimeout(() => {
            row.remove()
          }, 300)
        }
      }
    })
  })

  // Form Submissions (Prevent actual navigation for demo)
  const forms = document.querySelectorAll("form")
  forms.forEach((form) => {
    form.addEventListener("submit", (e) => {
      e.preventDefault()
      alert("Form submitted successfully! (Frontend simulation)")
      window.history.back()
    })
  })
})
