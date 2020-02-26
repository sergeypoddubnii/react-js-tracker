const addToLocalStorage = arr => {
  localStorage.setItem('tasks', JSON.stringify(arr));
};

const getFromLocalStorage = key => {
  return JSON.parse(localStorage.getItem(key));
};

export default { addToLocalStorage, getFromLocalStorage };
