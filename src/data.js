const FILE_ROOT = `data`

const names = new Set([
    "users",
    "accounts"
])

function filterData(data, predicate) {
    if (predicate) {
        return data.filter(predicate)
    }
    return data
}

function sortData(data, order) {
    if (order) {
        data.sort(order)
    }
    return data
}

async function fetchData(params) {
    const {name, predicate, order} = params
    if (!name) {
        throw new Error("Must name to fetch from")
    } 
    if (!names.has(name)) {
        throw new Error("Invalid name")
    }
    const payload = window.localStorage.getItem("data")
    const data = JSON.parse(payload)
    const result = data[name]
    return sortData(filterData(result, predicate), order)  
}

async function fetchOne(params) {
    const data = await fetchData(params)
    return data.shift()
}

async function fetchMany(params) {
    const {limit} = params
    const data = await fetchData(params)
    return data.slice(0, limit)
}

async function reload() {
    const cache = new Map()
    window.localStorage.removeItem("data")
    for (const name of names.values()) {
        const path = `${FILE_ROOT}/${name}.json` 
        const res = await fetch(path)
        const data = await res.json()
        cache.set(name, data)
    }
    const obj = Object.fromEntries(cache.entries())
    window.localStorage.setItem("data", JSON.stringify(obj))
}

async function init() {
    const data = window.localStorage.getItem("data")
    if (data) {
        return
    }
    await reload()
}

export default {
    fetchOne,
    fetchMany,
    reload,
    init
}