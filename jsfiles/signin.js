const signin = document.getElementById("signIn");
signin.addEventListener("submit", (event) => {
  event.preventDefault();

  const role = document.getElementById("role").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  if (role === "users") {
    const userData = JSON.parse(localStorage.getItem("users"));
    if (
      userData &&
      userData.email === email &&
      userData.password === password
    ) {
      alert("User logged in successfully!");
    } else {
      document.getElementById("errormsg").textContent =
        "Invalid email or password";
    }
  } else if (role === "admin") {
    const adminemail = "admin@gmail.com";
    const adminpassword = "11111111";
    if (email === adminemail && password === adminpassword) {
      alert("Admin logged in successfully!");
    } else {
      document.getElementById("errormsg").textContent =
        "Invalid email or password";
    }
  }
});
