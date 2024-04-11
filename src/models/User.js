import { Model } from "./Model.js"
import auth from "../auth.js"

class User extends Model {
    static name = "users"

    static async authenticate(credentials) {
        const {username, password} = credentials
        const user = await super.getOne({
            name: User.name,
            predicate: user => user.username === username
        })
        if (!user) {
            throw new Error(`No user with username '${username}'!`)
        }
        if (user.password !== password) {
            throw new Error("Passwords do not match!")
        }
        auth.login(user)
    }

    static getUser() {
        let newPathName = location.pathname
        if (newPathName.endsWith("/")) {
            newPathName = newPathName.slice(0, newPathName.length - 1)
        }
        newPathName = newPathName.split("/")
        newPathName.pop()
        newPathName = newPathName.join("/")
        const data = auth.check(
            true,
            location.origin + newPathName
        )
        const {id, username, name} = data
        return new User(id, username, name)
    }

    constructor(id, username, name) {
        super()
        this.id = id
        this.username = username
        this.name = name
    }
}

export {
    User
}