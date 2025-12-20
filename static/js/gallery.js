// Load Gallery Images
function loadGallery() {
  const galleryGrid = document.getElementById("galleryGrid")
  const emptyGallery = document.getElementById("emptyGallery")

  if (!galleryGrid) return

  galleryGrid.style.display = "grid"
  emptyGallery.style.display = "none"
}

// Lightbox Functions
function openLightbox(imageUrl, caption) {
  const lightbox = document.getElementById("lightbox")
  const lightboxImg = document.getElementById("lightboxImg")
  const lightboxCaption = document.getElementById("lightboxCaption")

  lightboxImg.src = imageUrl
  lightboxCaption.textContent = caption
  lightbox.classList.add("active")
}

function closeLightbox() {
  const lightbox = document.getElementById("lightbox")
  lightbox.classList.remove("active")
}

// Event Listeners
document.addEventListener("DOMContentLoaded", () => {
  loadGallery()

  const lightboxClose = document.querySelector(".lightbox-close")
  const lightbox = document.getElementById("lightbox")

  if (lightboxClose) {
    lightboxClose.addEventListener("click", closeLightbox)
  }

  if (lightbox) {
    lightbox.addEventListener("click", (e) => {
      if (e.target === lightbox) {
        closeLightbox()
      }
    })
  }
})
