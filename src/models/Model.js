import data from "../data.js" 

class Model {
    static async getAll(params={}) {
        return await data.fetchMany({...params})
    }

    static async getOne(params={}) {
        return await data.fetchOne({...params})
    }
}

export { Model }