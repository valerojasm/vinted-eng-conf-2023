const getPersistentValue = (key, defaultValue) => {
  const value = window?.localStorage.getItem(key)
  return JSON.parse(value) || defaultValue
}

export default getPersistentValue
