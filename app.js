//creating empty array initially or adding local storage values on refresh
const posts = JSON.parse(localStorage.getItem("posts")) || [];
//selecting the elements and assigning it to the variable
const blogForm = document.getElementById("blogForm");
const blogTitle = document.getElementById("blogTitle");
const blogContent = document.getElementById("blogContent");
const blogButton = document.getElementById("blogButton");
const blogList = document.getElementById("blogList");
