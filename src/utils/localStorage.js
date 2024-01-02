const addDataToLocalStorage = (data) => {
  localStorage.setItem('ip', JSON.stringify(data))
}

const removeDataFromLocalStorage = () => {
  localStorage.removeItem('ip')
}

const getDataFromLocalStorage = () => {
  return JSON.parse(localStorage.getItem('ip')) || null
}

export { addDataToLocalStorage, removeDataFromLocalStorage, getDataFromLocalStorage }