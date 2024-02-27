const userName = localStorage.getItem("name");
const heading = document.querySelector(".heading");
heading.innerHTML = `hello ${userName}`;

function displayBlogs() {
  let tBlogBody = document.getElementById("blogTbody");
  let blogdata = JSON.parse(localStorage.getItem("blog")) || [];
  let tablerows = "";
  if (blogdata.length > 0) {
    for (let i = 0; i < blogdata.length; i++) {
      tablerows += `
          <tr> 
            <td>${i + 1}</td>
            <td>${blogdata[i].title}</td>
            <td>${blogdata[i].discription}</td>
          
          </tr>`;
    }
    tBlogBody.innerHTML = tablerows;
  }
}
displayBlogs();
