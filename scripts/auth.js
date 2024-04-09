function check() {
    const user = window.localStorage.getItem("user")
    if (!user) {
        window.location.replace("/")
    }
}

function authenticate(user) {
    const data = JSON.stringify(user)
    window.localStorage.setItem("user", data)
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
    authenticate,
    currentUser
}