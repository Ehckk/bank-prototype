async function submit(params) {
    const {selector, validate, onSuccess} = params

    const form = document.querySelector(selector)
    if (!form) {
        throw new Error(`No form with id '${selector}'!`)
    }

    function getData() {
        const data = new Map()
        const inputs = form.querySelectorAll("input")
        for (const input of inputs) {
            data.set(input.name, input.value)
        } 
        return Object.fromEntries(data.entries())
    }
    
    function updateMessage(value) {
        const formMsg = form.querySelector(`p#message`)
        formMsg.textContent = value
    }

    return async (e) => {
        e.preventDefault()
        updateMessage("")

        try {
            const data = getData()
            const result = await validate(data)
            if (onSuccess) {
                onSuccess(result)
            }
        } catch (error) {
            updateMessage(error.message)
        }
    }
}


export default {
    submit
}