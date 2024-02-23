const signin = document.getElementById("signIn");
signin.addEventListener("submit", (event) => {
  event.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const userData = JSON.parse(localStorage.getItem("users"));

  const role = userData.find((element) => {
    if (element.email === email && atob(element.password) === password) {
      return element;
    } else {
      document.querySelector(
        "#errormsg"
      ).textContent = `invalid email or password`;
    }
  });

  if (role.role=="user") {
    console.log(role)
    localStorage.setItem("name", JSON.stringify(role.name));
    window.location.href = "welcome.html";
  }
  else{
    localStorage.setItem("name", JSON.stringify(role.name));
    window.location.href = "welcomadmin.html";
  }
});