let posts = [];
let editPosts = [];

const blogForm = document.getElementById("blogForm");
const contentInput = document.getElementById("content");
const titleInput = document.getElementById("title");
const titleError = document.getElementById("titleError");
const contentError = document.getElementById("contentError");
const postsContainer = document.getElementById("postsContainer");
const ButtonSubmit = document.getElementById("submit");



window.onload = () =>{
     const savedPosts = localStorage.getItem("posts");
     if(savedPosts){
          posts = JSON.parse(savedPosts);
          renderPosts();
     }
};


//Render Posts
function renderPosts(){
     postsContainer.innerHTML = "";

     posts.forEach(post => {
        const postDiv = document.createElement(div);
        postDiv.className = "post";

         postDiv.innerHTML = `
          <h3>${post.title}</h3>
          <p>${post.content}</p>
          <button onclick ="editPost('${post.id}')">Edit </Button>
          <button onclick ="deletePost('${post.id}')">Delete </Button>
          
     `;
     postsContainer.appendChild(postDiv);


     });   
         
}

//Form Submit

blogForm.addEventListener("submit", (e) => {
     e.preventDefault();
     //clearErrors();

     const title = titleInput.value.trim();
     const content = contentInput.value.trim();

     let isValid = true;

     if(!title){
          titleError.textContent = "Title is Required";
          isValid =false;
     }

     if (!content){
          contentError.textContent("Content is Required");
          isValid = false;

     }

     if(!isValid){
          return;
     }

     if(editPosts){
          const post = posts.find(p => p.id == editPosts);
          post.title = title;
          post.content = content;
          editPosts = null;

     }else {

          const newPost = {
               id:Date.now().toString(),
               title,
               content,
               timestamp: new Date().toISOString()
          };
          posts.push(newPost);
     }

     savedPosts();
     renderPosts();
     blogForm.reset;


     //localStorage.setItem("posts", JSON.stringify(posts));
}); 

function editPost(id){
     const post =post.find(p => p.id ===id);
     titleInput.value = post.content;
     editPost = id;

}

function deletePost(id){
     posts = posts.filter(post => post.id != id);
     savedPosts();
     renderPosts();
     
}

function clearErrors(){
     titleError.textContent = "";
     contentError.textContent = "";
}

function savedPosts(){
     localStorage.setItem("posts", JSON.stringify(posts));

}
