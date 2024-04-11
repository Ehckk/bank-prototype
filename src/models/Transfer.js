import { Model } from "./Model.js";

class Transfer extends Model {
    constructor(id, user_id, account, type, amount, datetime) {
        super()
        this.id = id
        this.user_id = user_id
        this.account = account
        this.type = type
        this.amount = "$" + amount
        const date = new Date(datetime)
        this.date = date.toLocaleDateString()
        this.time = date.toLocaleTimeString([], {
            hour12: true,
            hour: "2-digit",
            minute: "2-digit"
        })
    }

    static style(type) {
        if (type === "WITHDRAWAL") {
            return "error-text"
        }
        return "success-text"
    }
}

export {
    Transfer
}