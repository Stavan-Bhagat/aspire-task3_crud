const signIn = document.getElementById("signIn");
signIn.addEventListener("submit", (event) => {
  event.preventDefault();
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const userData = JSON.parse(localStorage.getItem("users"));
  const user = userData.find(
    (element) => element.email === email && atob(element.password) === password
  );

  if (user) {
    if (user.role === "user") {
      console.log(user.role);
      localStorage.setItem("name", JSON.stringify(user.name));
      window.location.href = "welcomeUser.html";
    } else {
      localStorage.setItem("name", JSON.stringify(user.name));
      window.location.href = "welcomeAdmin.html";
    }
  } else {
    document.querySelector(
      "#errorMessage"
    ).textContent = `invalid email or password`;
  }
});
// stop for going back
function stopBack() {
  window.history.go(1);
}
