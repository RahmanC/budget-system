export const useLocalStorage = (key: string) => {
  // setting data to local storage
  const setLocalStorage = (userData: {}) =>
    localStorage.setItem(key, JSON.stringify(userData));

  // get data from local storage
  const getLocalStorage = JSON.parse(localStorage.getItem(key) as string);

  //   remove data from local storage
  const removeLocalStorage = () => localStorage.removeItem(key);

  return { setLocalStorage, getLocalStorage, removeLocalStorage };
};
