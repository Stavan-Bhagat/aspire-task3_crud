document.querySelector(".logout").addEventListener("click", () => {
  let result = confirm("are you sure you want to logout");
  if (result) {
    window.location.href = "index.html";
  } else {
    console.log("user click cancel");
  }
});

const userName = localStorage.getItem("name");
const heading = document.querySelector(".heading");
heading.innerHTML = `hello ${userName}`;

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
          
          </tr>`;
    }
    tBlogBody.innerHTML = tableRows;
  }
}
displayBlogs();

function stopBack() {
  window.history.go(1);
}