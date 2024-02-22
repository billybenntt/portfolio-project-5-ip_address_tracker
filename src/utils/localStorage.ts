const addDataToLocalStorage = (data: object): void => {
    localStorage.setItem('ip', JSON.stringify(data))
}

const removeDataFromLocalStorage = (): void => {
    localStorage.removeItem('ip')
}

const getDataFromLocalStorage = (key: string) => {
    return JSON.parse(localStorage.getItem(key)!) || null
}

export {addDataToLocalStorage, removeDataFromLocalStorage, getDataFromLocalStorage}