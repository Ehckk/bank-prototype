function check(isAuthenticated=true, redirect="/") {
    const user = window.localStorage.getItem("user")
    const valid = Boolean(user) === isAuthenticated
    if (!valid) {
        window.location.replace(redirect)
    }
}

function login(user) {
    const data = JSON.stringify(user)
    window.localStorage.setItem("user", data)
    window.location.replace("/home.html")
}

function logout() {
    window.localStorage.removeItem("user")
    window.location.replace("/")
}

function currentUser() {
    const user = window.localStorage.getItem("user")
    if (!user) {
        window.location.replace("/")
    }   
    const data = JSON.parse(user)
    return data
}

export default {
    check,
    login,
    logout,
    currentUser
}