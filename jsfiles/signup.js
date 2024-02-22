let users=[]; 
document.getElementById("myForm").addEventListener("submit", (e) => {
  e.preventDefault();
  if (validate()) {
    const success = document.querySelector("#successMessage");
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const city = document.getElementById("city").value;
    const password = document.getElementById("password").value;
    const encryptpassword=btoa(password);
    success.style.display = "block";
    

    const data = {
      name: name,
      email: email,
      city: city,
      password: encryptpassword,
    };
    users.push(data);
    console.log(users);
    

    var userdata = localStorage.setItem("users", JSON.stringify(users));
    console.log(userdata);
  }2
});

function validate() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const city = document.getElementById("city").value;
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmPassword").value;

  let valid = true;

  const emailRegex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;

  if (name === "") {
    document.getElementById("sname").innerHTML = "it should not be empty";
    valid = false;
  } else {
    document.getElementById("sname").innerHTML = "";
  }

  if (email === "") {
    document.getElementById("semail").innerHTML = "it should not be empty";
    valid = false;
  } else if (!emailRegex.test(email)) {
    document.getElementById("semail").innerHTML = "incorrect email";
    valid = false;
  } else {
    document.getElementById("semail").innerHTML = "";
  }

  if (city === "") {
    document.getElementById("scity").innerHTML = "it should not be empty";
    valid = false;
  } else {
    document.getElementById("scity").innerHTML = "";
  }

  if (password.length < 8) {
    document.getElementById("spassword").innerHTML =
      "it should contain 8 characters";
    valid = false;
  } else if (password === "") {
    document.getElementById("spassword").innerHTML = "it should not be empty";
    valid = false;
  } else {
    document.getElementById("spassword").innerHTML = "";
  }

  if (confirmPassword !== password) {
    document.getElementById("sConfirmPassword").innerHTML =
      "password does not match";
    valid = false;
  } else if (password === "") {
    document.getElementById("sConfirmPassword").innerHTML =
      "it should not be empty";
    valid = false;
  } else {
    document.getElementById("sConfirmPassword").innerHTML = "";
  }
  return valid;
}
