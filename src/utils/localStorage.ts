const addDataToLocalStorage = (data: any) => {
    localStorage.setItem('ip', JSON.stringify(data))
}

const removeDataFromLocalStorage = () => {
    localStorage.removeItem('ip')
}

const getDataFromLocalStorage = (key: string) => {
    return JSON.parse(localStorage.getItem(key)!) || null
}

export {addDataToLocalStorage, removeDataFromLocalStorage, getDataFromLocalStorage}