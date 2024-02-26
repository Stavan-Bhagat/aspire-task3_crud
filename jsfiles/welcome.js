const userName = localStorage.getItem("name");
const heading = document.querySelector(".heading");
heading.innerHTML = `hello ${userName}`;
