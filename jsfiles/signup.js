document.getElementById("myForm").addEventListener("submit", (e) => {
  e.preventDefault();

  if (validate()) {
    if (isEmailExist()) {
      console.log("inside exist");
      document.querySelector("#errorEmail").textContent = `email already exist`;
      return false;
    } else {
      const success = document.querySelector("#successMessage");
      const { name, email, role, city, password } = getFormValues();
      const encryptPassword = btoa(password);
      success.style.display = "block";
      let user = JSON.parse(localStorage.getItem("users")) || [];

      const data = {
        name: name,
        email: email,
        city: city,
        role: role,
        password: encryptPassword,
      };
      user.push(data);
      var userData = localStorage.setItem("users", JSON.stringify(user));
      console.log(userData);
      e.target.reset();
    }
  }
});

// get values
function getFormValues() {
  return {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    role: document.getElementById("role").value,
    city: document.getElementById("city").value,
    password: document.getElementById("password").value,
    confirmPassword: document.getElementById("confirmPassword").value,
  };
}
// ismail exist
function isEmailExist() {
  const { email } = getFormValues();
  const userData = JSON.parse(localStorage.getItem("users"));
  if (userData === null) {
    return false;
  } else {
    const emailCheck = userData.some((element) => {
      return element.email === email;
    });
    console.log(emailCheck);
    return emailCheck;
  }
}
// validation checking
function validate() {
  const { name, email, role, city, password, confirmPassword } =
    getFormValues();
  let valid = true;
  const emailRegex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;

  if (name === "") {
    document.getElementById("errorName").innerHTML = "it should not be empty";
    valid = false;
  } else {
    document.getElementById("errorName").innerHTML = "";
  }

  if (email === "") {
    document.getElementById("errorEmail").innerHTML = "it should not be empty";
    valid = false;
  } else if (!emailRegex.test(email)) {
    document.getElementById("errorEmail").innerHTML = "incorrect email";
    valid = false;
  } else {
    document.getElementById("errorEmail").innerHTML = "";
  }

  if (city === "") {
    document.getElementById("errorCity").innerHTML = "it should not be empty";
    valid = false;
  } else {
    document.getElementById("errorCity").innerHTML = "";
  }

  if (password.length < 8) {
    document.getElementById("errorPassword").innerHTML =
      "it should contain 8 characters";
    valid = false;
  } else if (password === "") {
    document.getElementById("errorPassword").innerHTML = "it should not be empty";
    valid = false;
  } else {
    document.getElementById("errorPassword").innerHTML = "";
  }

  if (confirmPassword !== password) {
    document.getElementById("errorConfirmPassword").innerHTML =
      "password does not match";
    valid = false;
  } else if (password === "") {
    document.getElementById("errorConfirmPassword").innerHTML =
      "it should not be empty";
    valid = false;
  } else {
    document.getElementById("errorConfirmPassword").innerHTML = "";
  }
  return valid;
}
