//creating empty array initially or adding local storage values on refresh
const posts = JSON.parse(localStorage.getItem("posts")) || [];

//selecting the elements and assigning it to the variable
const blogForm = document.getElementById("blogForm");
const titleInput = document.getElementById("title");
const contentInput = document.getElementById("content");
const ButtonSubmit = document.getElementById("submit");
const blogList = document.getElementById("blogList");

//creating span elements for error message

const titleError = document.getElementById("titleError");
const contentError = document.getElementById("contentError");

//assigning count for id of the post
let count =posts.lenght ? Math.max (...posts.map((p) => Number(p.id))) : 0;
let editPostId = null;

//Listing all the posts from local storage

document.addEventListener("DOMContentLoaded", ()=>{
     renderPost();

});

// Blog title validation function for checking empty and minimum length
function validateTitle(){
     if (titleInput.validity.valueMissing){
          titleInput.setCustomValidity("Blog title is required");

     }else if(titleInput.validity.tooshort){
          titleInput.setCustomValidity("Blog title must be at least 6 characters");
     }else{
          titleInput.setCustomValidity("");
     }

     titleError.textContent = titleInput.validationMessage;
     return blogTitle.checkValidity();
}

// Blog content validation function for checking empty and minimum length

  function validateContent(){
     if (contentInput.validity.valueMissing){
          contentInput.setCustomValidity("Content is Required")
     }else if(contentInput.validity.tooshort){
          contentInput.setCustomValidity("content must be at least 6 characters long.");
     }else if (contentInput.validi.tooLong){
          blogContent.setCustomValidity("Content should no longer that 100 characters.");
     }else{
          contentInput.setCustomValidity("");
     }

     contentError.textContent = contentInput.validationMessage;
     return contentInput.checkValidity();
  }

  ////adding event listener to validate input fields
  titleInput.addEventListener("input",validateTitle);
  contentInput.addEventListener("input", validateContent);

  //adding event listener on the form to validate and add post
  blogForm.addEventListener("submit", function(event){
     event.preventDefault();
     const isTitleValid = validateTitle();
     const isContentValid = validateContent();

     if(!isTitleValid || !isContentValid){
          return;
     }

     //checking condition to edit the post
     if(editPostId){
          for(let i = 0; i< posts.lenght ; i++){
               if(posts[i].id == editPostId){
                    posts[i].title = titleInput.value;
                    posts[i].content = contentInput.value;
                    editPostId =null;
                    ButtonSubmit.textContent ="Submit";
                    break;
                    
               }
          }
     }else{
              //adding new post to the array
              posts.push({
                 id : ++count,
                 title : titleInput.value,
                 createdAt : new Date().toLocaleString(),

              });
     }

       //calling local storage function
       setLocalStorage();

       //calling the function to display the post on the page

       renderPost();
       blogForm.reset();

       // Adding array to the local storage
       function setLocalStorage(){
          localStorage.setItem("Posts",JSON.stringify(posts));
       }

       // function to add post to ul list
       function renderPost(){
          blogList.innerHTML ="";

       // Loop for accessing the objects in the array
          for(let i = 0; i < posts.lenght ; i++){
               // creating listitem and span tags for the post
               const listitem = document.createElement("li");
               //adding dataset to the list item for the id
               listitem.dataset.id = posts[i].id;

               //creating template literals to display the list
               listitem.innerHTML = `
                    <div><strong>ID:</strong> ${posts[i].id}</div>
                    <div><strong>Title:</strong> ${posts[i].title}</div>
                    <div><strong>Content:</strong> ${posts[i].content}</div>
                    <div><strong>Created At:</strong> ${posts[i].createdAt}</div>
                    <div style="margin-top: 8px;">
                    <button class="edit-button">Edit Post</button>
                    <button class="delete-button">Delete Post</button> </div>


               `
               //appending listitem to the list
               blogList.appendChild(listitem);
          
          }

       }

       //adding event listener to remove and edit post
       blogList.addEventListener("click", function(event){
            //capturing the listitem and getting it's data id when clicking the edit or delete button
            const listitem = event.target.closest("[data-id]");
            if (!listitem) return;
             const id = listitem.dataset.id;
             //deleting the post
             if(event.target.classList.contains("delete-button")){
               for (let i = 0; i < posts.length; i++){
                    if(posts[i].id == id)
                         posts.slice(i,1);

               }
             }

             setLocalStorage();
             renderPost();

             //Editing the post
             if(event.target.classList.contains("edit-button")){
               const postToEdit =posts.find((posts), posts.id);
               blogTitle.value = postToEdit.content;
               editPostId = id;
               blogButton.textContent = "Update Post"
             }
       });

  });



// let posts = [];
// let editPostId = null;

// const blogForm = document.getElementById("blogForm");
// const contentInput = document.getElementById("content");
// const titleInput = document.getElementById("title");
// const titleError = document.getElementById("titleError");
// const contentError = document.getElementById("contentError");
// const postsContainer = document.getElementById("postsContainer");
// const ButtonSubmit = document.getElementById("submit");

// ButtonSubmit.addEventListener('click',() =>{
//      const newContent =document.createElement('div');
//      newContent.titleInput = title.value;
//      newContent.
//      content.replaceWith(newContent);
// });




// window.onload = () =>{
//      const savedPosts = localStorage.getItem("posts");
//      if(savedPosts){
//           posts = JSON.parse(savedPosts);
//           renderPosts();
//      }
// };

// // function displayPost(){
// //      posts.
// // }

// //Render Posts
// function renderPosts(){
//      postsContainer.innerHTML = "";

//      posts.forEach(post => {
//         const postDiv = document.createElement(div);
//         postDiv.className = "post";

//          postDiv.innerHTML = `
//           <h3>${post.title}</h3>
//           <p>${post.content}</p>
//           <button onclick ="editPost('${post.id}')">Edit </Button>
//           <button onclick ="deletePost('${post.id}')">Delete </Button>
          
//      `;
//      postsContainer.appendChild(postDiv);


//      });   
         
// }

// //Form Submit

// blogForm.addEventListener("submit", (e) => {
//      e.preventDefault();
//      //clearErrors();

//      const title = titleInput.value.trim();
//      const content = contentInput.value.trim();

//      let isValid = true;

//      if(!title){
//           titleError.textContent = "Title is Required";
//           isValid =false;
//      }

//      if (!content){
//           contentError.textContent("Content is Required");
//           isValid = false;

//      }

//      if(!isValid){
//           return;
//      }

//      if(editPosts){
//           const post = posts.find(p => p.id == editPosts);
//           post.title = title;
//           post.content = content;
//           editPosts = null;

//      }else {

//           const newPost = {
//                id:Date.now().toString(),
//                title,
//                content,
//                timestamp: new Date().toISOString()
//           };
//           posts.push(newPost);
//      }

//      savedPosts();
//      renderPosts();
//      blogForm.reset;


//      //localStorage.setItem("posts", JSON.stringify(posts));
// }); 

// function editPost(id){
//      const post =post.find(p => p.id ===id);
//      titleInput.value = post.content;
//      editPost = id;

// }

// function deletePost(id){
//      posts = posts.filter(post => post.id != id);
//      savedPosts();
//      renderPosts();
     
// }

// function clearErrors(){
//      titleError.textContent = "";
//      contentError.textContent = "";
// }

// function savedPosts(){
//      localStorage.setItem("posts", JSON.stringify(posts));

// }
