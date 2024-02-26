const userName = localStorage.getItem("name");
const heading = document.querySelector("#heading");
const tbody = document.querySelector("#tbody");
heading.innerHTML = `hello ${userName}`;

const table = document.querySelector("table");
const userdata = JSON.parse(localStorage.getItem("users"));
let tablerows = "";
console.log(userdata);

if (userdata.length > 0) {
  for (let i = 0; i < userdata.length; i++) {
    tablerows += `
    <tr> 
    <td>${i + 1}    </td>
    <td>${userdata[i].name}</td>
    <td>${userdata[i].email}</td>
    <td>${userdata[i].role}</td>
    <td>${userdata[i].city}</td>
   
    <td> <button type="button" class="btn btn-warning" data-toggle="modal" data-target="#updateModal" onclick="updatedata('${userdata[i].email
    }')">
    Update
  </button></td>
    <td><button type="button" class="btn btn-danger" onclick="deletedata('${userdata[i].email
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

function updatedata(email) {
  return email;
}
document.getElementById('submitBtn').addEventListener('click', function () {
  let index = updatedata();
  console.log(index);
  let myform = document.forms['myform']
  let uname = myform.elements['name'].value;
  let uemail = myform.elements['email'].value;
  let urole = myform.elements['role'].value;
  let ucity = myform.elements['city'].value;

  var updateddata = {
    name: uname,
    email: uemail,
    role: urole,
    city: ucity
  }
  var users = JSON.parse(localStorage.getItem("users"));
  function updateUser(index, newData) {
    if (users && users[index]) {

      users[index] = newData;


      localStorage.setItem('userData', JSON.stringify(users));
      return true;
    } else {
      return false;
    }
  }
  updateUser(updatedata, updateddata);

});