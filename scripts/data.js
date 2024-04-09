const FILE_ROOT = `data`

async function filterData(data, predicate) {
    if (predicate) {
        return data.filter(predicate)
    }
    return data
}

async function sortData(data, order) {
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
    console.log(data)
    const results = sortData(filterData(data, predicate), order)  
    console.log(results)
    return data
}

async function fetchOne(params) {
    const data = await fetchData(params)
    if (data.length === 0) {
        throw new Error("Not found")
    }
    return data[0]
}

async function fetchMany(params) {
    const {limit} = params
    const data = await fetchData(params)
    if (data.length === 0) {
        throw new Error("Not found")
    }
    return data.slice(0, limit)
}


export {
    fetchOne,
    fetchMany
}