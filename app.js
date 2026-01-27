let posts = JSON.parse(localStorage.getItem("posts")) || [];
let editId = null;

const form = document.getElementById("postForm");
const titleInput = document.getElementById("title");
const contentInput = document.getElementById("content");
const postsContainer = document.getElementById("postsContainer");

const titleError = document.getElementById("titleError");
const contentError = document.getElementById("contentError");

renderPosts();

form.addEventListener("submit", function (e) {
  e.preventDefault();

  titleError.textContent = "";
  contentError.textContent = "";

  if (!titleInput.value.trim()) {
    titleError.textContent = "Title is required";
    return;
  }

  if (!contentInput.value.trim()) {
    contentError.textContent = "Content is required";
    return;
  }

  if (editId) {
    posts = posts.map(post =>
      post.id === editId
        ? { ...post, title: titleInput.value, content: contentInput.value }
        : post
    );
    editId = null;
  } else {
    posts.push({
      id: Date.now(),
      title: titleInput.value,
      content: contentInput.value,
    });
  }

  localStorage.setItem("posts", JSON.stringify(posts));
  form.reset();
  renderPosts();
});

function renderPosts() {
  postsContainer.innerHTML = "";

  posts.forEach(post => {
    const div = document.createElement("div");
    div.className = "post";

    div.innerHTML = `
      <h3>${post.title}</h3>
      <p>${post.content}</p>
      <button onclick="editPost(${post.id})">Edit</button>
      <button onclick="deletePost(${post.id})">Delete</button>
    `;

    postsContainer.appendChild(div);
  });
}

function deletePost(id) {
  posts = posts.filter(post => post.id !== id);
  localStorage.setItem("posts", JSON.stringify(posts));
  renderPosts();
}

function editPost(id) {
  const post = posts.find(p => p.id === id);
  titleInput.value = post.title;
  contentInput.value = post.content;
  editId = id;
}