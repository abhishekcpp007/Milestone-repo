document.addEventListener("DOMContentLoaded", function () {
    const blogForm = document.querySelector("#blog-form");
    const blogList = document.querySelector("#blog-list");
  
    blogForm.addEventListener("submit", function (event) {
      event.preventDefault();
  
      const title = document.querySelector("#blog-title").value;
      const content = document.querySelector("#blog-content").value;
  
      if (title && content) {
        const blogData = {
          title,
          content,
        };
  
        saveBlogToLocalStorage(blogData);
        renderBlogPost(blogData);
        blogForm.reset();
      }
    });
  
    function saveBlogToLocalStorage(blogData) {
      let blogs = JSON.parse(localStorage.getItem("blogs")) || [];
      blogs.push(blogData);
      localStorage.setItem("blogs", JSON.stringify(blogs));
    }
  
    function renderBlogPost(blogData) {
      const blogItem = document.createElement("li");
      blogItem.classList.add("blog-item");
      blogItem.innerHTML = `
        <h3>${blogData.title}</h3>
        <p>${blogData.content}</p>
      `;
      blogList.appendChild(blogItem);
    }
  
    function loadExistingBlogs() {
      const blogs = JSON.parse(localStorage.getItem("blogs")) || [];
      blogs.forEach((blogData) => renderBlogPost(blogData));
    }
  
    loadExistingBlogs();
  });
  