// Tab Navigation
const navLinks = document.querySelectorAll(".admin-nav-link[data-tab]")
const tabs = document.querySelectorAll(".admin-tab")

navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault()

    // Remove active class from all links and tabs
    navLinks.forEach((l) => l.classList.remove("active"))
    tabs.forEach((t) => t.classList.remove("active"))

    // Add active class to clicked link
    link.classList.add("active")

    // Show corresponding tab
    const tabId = link.getAttribute("data-tab") + "Tab"
    document.getElementById(tabId).classList.add("active")
  })
})

// ===== BLOG MANAGEMENT =====

let editingBlogId = null

// Show/Hide Blog Form
document.getElementById("addBlogBtn").addEventListener("click", () => {
  document.getElementById("blogForm").style.display = "block"
  document.getElementById("blogFormTitle").textContent = "Add New Blog Post"
  document.getElementById("blogPostForm").reset()
  editingBlogId = null
})

document.getElementById("cancelBlogBtn").addEventListener("click", () => {
  document.getElementById("blogForm").style.display = "none"
  document.getElementById("blogPostForm").reset()
  editingBlogId = null
})

// Load Blog Posts in Admin
function loadAdminBlogPosts() {
  const posts = JSON.parse(localStorage.getItem("blogPosts") || "[]")
  const tableBody = document.getElementById("blogTableBody")
  const noBlogPosts = document.getElementById("noBlogPosts")

  if (posts.length === 0) {
    tableBody.innerHTML = ""
    noBlogPosts.style.display = "block"
    return
  }

  noBlogPosts.style.display = "none"

  tableBody.innerHTML = posts
    .map((post) => {
      const date = new Date(post.date).toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
      })

      return `
            <tr>
                <td>${post.title}</td>
                <td>${post.author}</td>
                <td>${date}</td>
                <td>
                    <button class="action-btn btn-edit" onclick="editBlogPost(${post.id})">Edit</button>
                    <button class="action-btn btn-delete" onclick="deleteBlogPost(${post.id})">Delete</button>
                </td>
            </tr>
        `
    })
    .join("")
}

// Save Blog Post
document.getElementById("blogPostForm").addEventListener("submit", (e) => {
  e.preventDefault()

  const posts = JSON.parse(localStorage.getItem("blogPosts") || "[]")

  const postData = {
    id: editingBlogId || Date.now(),
    title: document.getElementById("blogTitle").value,
    author: document.getElementById("blogAuthor").value,
    image: document.getElementById("blogImage").value,
    excerpt: document.getElementById("blogExcerpt").value,
    content: document.getElementById("blogContent").value,
    date: editingBlogId ? posts.find((p) => p.id === editingBlogId).date : new Date().toISOString(),
  }

  if (editingBlogId) {
    const index = posts.findIndex((p) => p.id === editingBlogId)
    posts[index] = postData
  } else {
    posts.unshift(postData)
  }

  localStorage.setItem("blogPosts", JSON.stringify(posts))

  document.getElementById("blogForm").style.display = "none"
  document.getElementById("blogPostForm").reset()
  editingBlogId = null

  loadAdminBlogPosts()
  alert("Blog post saved successfully!")
})

// Edit Blog Post
function editBlogPost(id) {
  const posts = JSON.parse(localStorage.getItem("blogPosts") || "[]")
  const post = posts.find((p) => p.id === id)

  if (post) {
    editingBlogId = id
    document.getElementById("blogFormTitle").textContent = "Edit Blog Post"
    document.getElementById("blogTitle").value = post.title
    document.getElementById("blogAuthor").value = post.author
    document.getElementById("blogImage").value = post.image
    document.getElementById("blogExcerpt").value = post.excerpt
    document.getElementById("blogContent").value = post.content
    document.getElementById("blogForm").style.display = "block"
  }
}

// Delete Blog Post
function deleteBlogPost(id) {
  if (confirm("Are you sure you want to delete this blog post?")) {
    let posts = JSON.parse(localStorage.getItem("blogPosts") || "[]")
    posts = posts.filter((p) => p.id !== id)
    localStorage.setItem("blogPosts", JSON.stringify(posts))
    loadAdminBlogPosts()
  }
}

// ===== GALLERY MANAGEMENT =====

let editingGalleryId = null

// Show/Hide Gallery Form
document.getElementById("addGalleryBtn").addEventListener("click", () => {
  document.getElementById("galleryForm").style.display = "block"
  document.getElementById("galleryFormTitle").textContent = "Add New Image"
  document.getElementById("galleryImageForm").reset()
  editingGalleryId = null
})

document.getElementById("cancelGalleryBtn").addEventListener("click", () => {
  document.getElementById("galleryForm").style.display = "none"
  document.getElementById("galleryImageForm").reset()
  editingGalleryId = null
})

// Load Gallery in Admin
function loadAdminGallery() {
  const images = JSON.parse(localStorage.getItem("galleryImages") || "[]")
  const grid = document.getElementById("adminGalleryGrid")
  const noImages = document.getElementById("noGalleryImages")

  if (images.length === 0) {
    grid.innerHTML = ""
    noImages.style.display = "block"
    return
  }

  noImages.style.display = "none"

  grid.innerHTML = images
    .map(
      (img) => `
        <div class="admin-gallery-item">
            <img src="${img.imageUrl}" alt="${img.caption}" onerror="this.src='/--encodeuricomponent-img-caption--.jpg'">
            <div class="admin-gallery-caption">
                <h4>${img.caption}</h4>
                <span class="category">${img.category}</span>
            </div>
            <div class="admin-gallery-actions">
                <button class="action-btn btn-edit" onclick="editGalleryImage(${img.id})">Edit</button>
                <button class="action-btn btn-delete" onclick="deleteGalleryImage(${img.id})">Delete</button>
            </div>
        </div>
    `,
    )
    .join("")
}

// Save Gallery Image
document.getElementById("galleryImageForm").addEventListener("submit", (e) => {
  e.preventDefault()

  const images = JSON.parse(localStorage.getItem("galleryImages") || "[]")

  const imageData = {
    id: editingGalleryId || Date.now(),
    imageUrl: document.getElementById("galleryImageUrl").value,
    caption: document.getElementById("galleryCaption").value,
    category: document.getElementById("galleryCategory").value,
  }

  if (editingGalleryId) {
    const index = images.findIndex((img) => img.id === editingGalleryId)
    images[index] = imageData
  } else {
    images.push(imageData)
  }

  localStorage.setItem("galleryImages", JSON.stringify(images))

  document.getElementById("galleryForm").style.display = "none"
  document.getElementById("galleryImageForm").reset()
  editingGalleryId = null

  loadAdminGallery()
  alert("Image saved successfully!")
})

// Edit Gallery Image
function editGalleryImage(id) {
  const images = JSON.parse(localStorage.getItem("galleryImages") || "[]")
  const image = images.find((img) => img.id === id)

  if (image) {
    editingGalleryId = id
    document.getElementById("galleryFormTitle").textContent = "Edit Image"
    document.getElementById("galleryImageUrl").value = image.imageUrl
    document.getElementById("galleryCaption").value = image.caption
    document.getElementById("galleryCategory").value = image.category
    document.getElementById("galleryForm").style.display = "block"
  }
}

// Delete Gallery Image
function deleteGalleryImage(id) {
  if (confirm("Are you sure you want to delete this image?")) {
    let images = JSON.parse(localStorage.getItem("galleryImages") || "[]")
    images = images.filter((img) => img.id !== id)
    localStorage.setItem("galleryImages", JSON.stringify(images))
    loadAdminGallery()
  }
}

// Load data on page load
document.addEventListener("DOMContentLoaded", () => {
  loadAdminBlogPosts()
  loadAdminGallery()
})
