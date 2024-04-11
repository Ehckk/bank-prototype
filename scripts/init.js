import data from "../src/data.js"

async function init() {
    const cache = window.localStorage.getItem("data")
    if (!cache) {
        await data.reload()
    }
}

(async () => await init())()