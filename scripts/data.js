const FILE_ROOT = `data`

async function fetchData(params) {
    const {name, predicate, one} = params
    if (!name) {
        throw new Error("Must specify file name to fetch from")
    } 
    const path = `${FILE_ROOT}/${name}.json` 
    const res = await fetch(path)
    console.log(res)
    const data = await res.json() 
    console.log(data)
    
    if (!predicate) {
        
    }
    return data
}

export {
    fetchData
}