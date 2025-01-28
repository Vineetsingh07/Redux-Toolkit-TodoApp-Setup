const getDataFromLocalStorage = (key) => {
  return JSON.parse(localStorage.getItem(key));
};

const setDataInLocalStorage = (key, value) => {
  const data = JSON.stringify(value);
  localStorage.setItem(key, data);
};

const removeDataFromLocalStorage = (key) => {
  localStorage.removeItem(key);
};

export {
  getDataFromLocalStorage,
  setDataInLocalStorage,
  removeDataFromLocalStorage,
};
