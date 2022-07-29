Object.defineProperty(module.exports, "username", {
    get: () => window.localStorage.getItem("Login-Username"),
    set: (value) => window.localStorage.setItem("Login-Username", value)
})

Object.defineProperty(module.exports, "level", {
    get: () => window.localStorage.getItem("Login-Level") || "annonomous",
    set: (value) => window.localStorage.setItem("Login-Level", value)
})

Object.defineProperty(module.exports, "token", {
    get: () => window.localStorage.getItem("Login-Token"),
    set: (value) => window.localStorage.setItem("Login-Token", value)
})

Object.defineProperty(module.exports, "loggedIn", {
    get: () => !!window.localStorage.getItem("Login-Token")
})
