let posts = [];

const title = document.getElementById("title");
const  content = document.getElementById("content");

function savepost(){
     localStorage.setItem("tasks", JSON.stringify(tasks));
}

