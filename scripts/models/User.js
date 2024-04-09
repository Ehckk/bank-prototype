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
        const data = auth.currentUser()
        const {id, username} = data
        return User(id, username)
    }

    constructor(id, username, name) {
        this.id = id
        this.name = name
        this.username = username
    }
}

export {
    User
}