import auth from "../src/auth.js"


console.log(location.origin, newPathName, location)
auth.check(false, location.origin + location.pathname + "home")