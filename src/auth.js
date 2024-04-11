function check(isAuthenticated=true, redirect="") {
    const user = window.localStorage.getItem("user")
    const valid = Boolean(user) === isAuthenticated
    if (!valid) {
        window.location.replace(redirect)
    }
    if (isAuthenticated) {
        const data = JSON.parse(user)
        return data
    }
}

function login(user) {
    const data = JSON.stringify(user)
    localStorage.setItem("user", data)
    const newPathName = location.pathname + "home"
    console.log(location.host, newPathName, location)
    location.assign(location.origin + newPathName)
}

function logout() {
    localStorage.removeItem("user")
    let newPathName = location.pathname
    if (newPathName.endsWith("/")) {
        newPathName = newPathName.slice(0, newPathName.length - 1)
    }
    newPathName = newPathName.split("/")
    newPathName.pop()
    newPathName = newPathName.join("/")
    console.log(location.origin, newPathName, location)
    location.assign(location.origin + newPathName)
}

export default {
    check,
    login,
    logout
}