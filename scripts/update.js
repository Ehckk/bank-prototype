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
        "home": "My Accounts",
        "transfer": "Transfers"
    }

    updaters.push(() => {
        const regex = new RegExp("^\/?([^\/\n]+)\/?$")
        const key = regex.exec(window.location.pathname)[1]
        console.log(key);
        navbarTitle.textContent = mapping[key]
    })    
}

data.update(updaters)