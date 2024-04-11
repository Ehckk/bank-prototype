import { Model } from "./Model.js"

class Account extends Model {
    name = "accounts"

    constructor (id, user_id, alias, type, num) {
        super()
        this.id = id
        this.user_id = user_id
        this.alias = alias
        this.type = type
        this.num = num
    }

    static censorNum(num) {
        const censored = num.split("-")
        let i = 0
        while (i < 3) {
            censored[i] = "****"
            i++
        }  
        return censored.join("-")
    }
}

export {
    Account
}