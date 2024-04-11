import data from "../src/data.js"
import { User } from "../src/models/index.js"

const updaters = []

const sidebarName = document.querySelector("#name")
if (sidebarName) {
    updaters.push(() => {
        const user = User.getUser()
        sidebarName.textContent = "Logged in as " + user.name
    })
}

const navbarTitle = document.querySelector("#title")
if (navbarTitle) {
    const mapping = {
        "/home.html": "My Accounts",
        "/transfer.html": "Transfers"
    }

    updaters.push(() => {
        navbarTitle.textContent = mapping[window.location.pathname]
    })    
}

data.update(updaters)