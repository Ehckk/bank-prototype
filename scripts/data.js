const FILE_ROOT = `data`

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
        throw new Error("Must specify file name to fetch from")
    } 
    const path = `${FILE_ROOT}/${name}.json` 
    const res = await fetch(path)
    const data = await res.json()
    return sortData(filterData(data, predicate), order)  
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


export default {
    fetchOne,
    fetchMany
}