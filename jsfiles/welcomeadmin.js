// logout
document.querySelector(".logout").addEventListener("click", () => {
  let result = confirm("are you sure you want to logout");
  if (result) {
    window.location.href = "index.html";
  } else {
    console.log("user click cancel");
  }
});
// display userData
const userName = localStorage.getItem("name");
const heading = document.querySelector("#heading");
const tbody = document.querySelector("#tbody");
heading.innerHTML = `hello ${userName}`;
const table = document.querySelector("table");
const userData = JSON.parse(localStorage.getItem("users"));
let tableRows = "";

if (userData.length > 0) {
  for (let i = 0; i < userData.length; i++) {
    tableRows += `
    <tr> 
    <td>${i + 1}    </td>
    <td>${userData[i].name}</td>
    <td>${userData[i].email}</td>
    <td>${userData[i].role}</td>
    <td>${userData[i].city}</td>
    <td> <button type="button" class="btn btn-warning" data-toggle="modal" data-target="#updateModal" onclick=updateData(${i})>
    Update </button></td>
    <td><button type="button" class="btn btn-danger" onclick="deleteData('${userData[i].email
      }')">Delete</button></td>
    </tr>`;
  }
  tbody.innerHTML = tableRows;
}

// delete data
function deleteData(userEmail) {
  let result = confirm("are you sure you want to delete it?");
  if (result) {
    var users = JSON.parse(localStorage.getItem("users"));
    var restUsers = users.filter(function (user) {
      return user.email !== userEmail;
    });
    localStorage.setItem("users", JSON.stringify(restUsers));
    location.reload();
  } else {
    console.log("user click cancel");
  }
}

// update the data
function updateData(index) {
  var users = JSON.parse(localStorage.getItem("users"));
  // fill the form with existing value
  document.getElementById("name").value = users[index].name;
  document.getElementById("email").value = users[index].email;
  document.getElementById("role").value = users[index].role;
  document.getElementById("city").value = users[index].city;

  document.getElementById("submitBtn").addEventListener("click", () => {
    let updatedName = document.getElementById("name").value;
    let updatedEmail = document.getElementById("email").value;
    let updatedRole = document.getElementById("role").value;
    let updatedCity = document.getElementById("city").value;

    users[index].name = updatedName;
    users[index].email = updatedEmail;
    users[index].role = updatedRole;
    users[index].city = updatedCity;

    localStorage.setItem("users", JSON.stringify(users));
    location.reload();
  });
}

// add blog
function addBlog() {
  let blogForm = document.getElementById("blogForm");
  let blog = JSON.parse(localStorage.getItem("blog")) || [];
  let title = document.getElementById("title").value;
  console.log(title);
  let blogObj = {
    title: document.getElementById("title").value,
    description: document.getElementById("description").value,
  };
  blog.push(blogObj);
  localStorage.setItem("blog", JSON.stringify(blog));
  blogForm.reset();
  displayBlogs();
}

function displayBlogs() {
  let tBlogBody = document.getElementById("blogTbody");
  let blogData = JSON.parse(localStorage.getItem("blog")) || [];
  let tableRows = "";

  if (blogData.length > 0) {
    for (let i = 0; i < blogData.length; i++) {
      tableRows += `
        <tr> 
          <td>${i + 1}</td>
          <td>${blogData[i].title}</td>
          <td>${blogData[i].description}</td>
          <td>
            <button type="button" class="btn btn-warning" data-toggle="modal" data-target="#updateBlog" onclick="updateblog(${i})">Update</button>
          </td>
          <td>
            <button type="button" class="btn btn-danger" onclick="deleteBlog(${i})">Delete</button>
          </td>
        </tr>`;
    }
    tBlogBody.innerHTML = tableRows;
  }
}

function deleteBlog(index) {
  let result = confirm("are you sure you want to delete it?");
  if (result) {
    let blogData = JSON.parse(localStorage.getItem("blog")) || [];
    blogData.splice(index, 1);
    localStorage.setItem("blog", JSON.stringify(blogData));
    location.reload();
    displayBlogs();
  } else {
    console.log("clicked cancel");
  }
}

function updateBlog(index) {
  let blogData = JSON.parse(localStorage.getItem("blog")) || [];
  document.getElementById("updateTitle").value = blogData[index].title;
  document.getElementById("updateDescription").value = blogData[index].description;

  document.getElementById("updateBlogButton").addEventListener("click", () => {
    let title = document.getElementById("updateTitle").value;
    let description = document.getElementById("updateDescription").value;
    blogData[index].title = title;
    blogData[index].description = description;
    localStorage.setItem("blog", JSON.stringify(blogData));
    location.reload();
  });
}
displayBlogs();
function stopBack() {
  window.history.go(1);
}
