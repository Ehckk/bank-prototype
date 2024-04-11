const sidebar = document.querySelector("#sidebar")
let sidebarOpen =  sidebar.classList.contains("open")

function toggleSidebar(value) {
  if (sidebarOpen === value) {
    return
  }
  sidebarOpen = value
  if (!sidebar.classList.contains("open")) {
    sidebar.classList.add("open")
  } else {
    sidebar.classList.remove("open")
  }
}
    
const closeBtn = document.querySelector("#close-btn")
closeBtn.addEventListener("click", () => toggleSidebar(false))

const menuBtn = document.querySelector("#menu-btn")
menuBtn.addEventListener("click", () => toggleSidebar(true))