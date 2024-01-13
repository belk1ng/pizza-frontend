export const getStorageValue = (key: string) => {
  const value = localStorage.getItem(key);

  if (value) {
    try {
      return JSON.parse(value);
    } catch {
      return value;
    }
  }

  return value;
};

export const setStorageValue = <T>(key: string, value: T) => {
  localStorage.setItem(key, JSON.stringify(value));
};
