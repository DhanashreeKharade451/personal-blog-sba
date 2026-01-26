let posts = [];
let editPosts = [];

const blogForm = document.getElementById("blogForm");
const contentInput = document.getElementById("content");
const titleInput = document.getElementById("title");
const titleError = document.getElementById("titleError");
const contentError = document.getElementById("contentError");
const postContainer = document.getElementById("postContainer";
const ButtonSubmit = document.getElementById("submit")
)


function savepost(){
     localStorage.setItem("tasks", JSON.stringify(tasks));
}
