function check(isAuthenticated=true, redirect="..") {
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
    window.localStorage.setItem("user", data)
    window.location.replace("/home")
}

function logout() {
    window.localStorage.removeItem("user")
    window.location.replace("..")
}

export default {
    check,
    login,
    logout
}