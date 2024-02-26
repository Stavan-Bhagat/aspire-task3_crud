const userName = localStorage.getItem("name");
const heading = document.querySelector("#heading");
const tbody = document.querySelector("#tbody");
heading.innerHTML = `hello ${userName}`;

const table = document.querySelector("table");
const userdata = JSON.parse(localStorage.getItem("users"));
let tablerows = "";

if (userdata.length > 0) {
  for (let i = 0; i < userdata.length; i++) {
    tablerows += `
    <tr> 
    <td>${i + 1}    </td>
    <td>${userdata[i].name}</td>
    <td>${userdata[i].email}</td>
    <td>${userdata[i].role}</td>
    <td>${userdata[i].city}</td>
   
    <td> <button type="button" class="btn btn-warning" data-toggle="modal" data-target="#updateModal" onclick=updatedata(${i})>
    Update
  </button></td>
    <td><button type="button" class="btn btn-danger" onclick="deletedata('${
      userdata[i].email
    }')">Delete</button></td>
    </tr>`;
  }
  tbody.innerHTML = tablerows;
}

// delete data

function deletedata(userEmail) {
  var users = JSON.parse(localStorage.getItem("users"));

  var restUsers = users.filter(function (user) {
    return user.email !== userEmail;
  });
  console.log(restUsers);
  localStorage.setItem("users", JSON.stringify(restUsers));
  location.reload();
}

// update the data
function updatedata(index) {
  console.log(index);
  var users = JSON.parse(localStorage.getItem("users"));
  console.log(users);
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
