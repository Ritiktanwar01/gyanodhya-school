// Get blog post ID from URL
const urlParams = new URLSearchParams(window.location.search)
const blogId = urlParams.get("id")

// Load blog posts from localStorage
const blogPosts = JSON.parse(localStorage.getItem("blogPosts")) || []

// Display blog detail
function displayBlogDetail() {
  const blogDetailContent = document.getElementById("blogDetailContent")

  if (!blogId || blogPosts.length === 0) {
    blogDetailContent.innerHTML = `
            <div class="no-blog">
                <h2>Blog post not found</h2>
                <p>The blog post you're looking for doesn't exist.</p>
                <a href="blog.html" class="btn-primary">Back to Blog</a>
            </div>
        `
    return
  }

  const post = blogPosts.find((p) => p.id === Number.parseInt(blogId))

  if (!post) {
    blogDetailContent.innerHTML = `
            <div class="no-blog">
                <h2>Blog post not found</h2>
                <p>The blog post you're looking for doesn't exist.</p>
                <a href="blog.html" class="btn-primary">Back to Blog</a>
            </div>
        `
    return
  }

  blogDetailContent.innerHTML = `
        <div class="blog-detail-header">
            <img src="${post.image}" alt="${post.title}">
            <div class="blog-meta">
                <span><i class="fas fa-calendar"></i> ${post.date}</span>
                <span><i class="fas fa-user"></i> ${post.author}</span>
                <span><i class="fas fa-folder"></i> ${post.category}</span>
            </div>
            <h1>${post.title}</h1>
        </div>
        <div class="blog-detail-body">
            <p class="lead">${post.excerpt}</p>
            ${post.content}
            <div class="blog-tags">
                <strong>Tags:</strong>
                <span class="tag">Education</span>
                <span class="tag">${post.category}</span>
                <span class="tag">School</span>
            </div>
            <div class="blog-share">
                <strong>Share this post:</strong>
                <a href="#" class="share-btn"><i class="fab fa-facebook-f"></i></a>
                <a href="#" class="share-btn"><i class="fab fa-twitter"></i></a>
                <a href="#" class="share-btn"><i class="fab fa-linkedin-in"></i></a>
                <a href="#" class="share-btn"><i class="fab fa-whatsapp"></i></a>
            </div>
        </div>
        <div class="blog-navigation">
            <a href="blog.html" class="btn-secondary"><i class="fas fa-arrow-left"></i> Back to Blog</a>
        </div>
    `
}

// Display recent posts
function displayRecentPosts() {
  const recentPostsContainer = document.getElementById("recentPosts")
  const recentPosts = blogPosts.slice(0, 4)

  if (recentPosts.length === 0) {
    recentPostsContainer.innerHTML = "<p>No recent posts available.</p>"
    return
  }

  recentPostsContainer.innerHTML = recentPosts
    .map(
      (post) => `
        <div class="recent-post-item">
            <img src="${post.image}" alt="${post.title}">
            <div class="recent-post-content">
                <h4><a href="blog-detail.html?id=${post.id}">${post.title}</a></h4>
                <span><i class="fas fa-calendar"></i> ${post.date}</span>
            </div>
        </div>
    `,
    )
    .join("")
}

// Initialize
displayBlogDetail()
displayRecentPosts()
