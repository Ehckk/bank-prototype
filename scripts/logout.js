import auth from "../src/auth.js"

const logoutBtn = document.querySelector("#logout")
logoutBtn.addEventListener("click", auth.logout)