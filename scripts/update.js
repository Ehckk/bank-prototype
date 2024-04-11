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
        let key = window.location.pathname
        if (key.endsWith("/")) {
            key = key.slice(0, key.length - 1).split("/").pop()
        }
        console.log(key);
        navbarTitle.textContent = mapping[key]
    })    
}

data.update(updaters)