const logger = (store) => (next) => (action) => {
  console.log('dispatch action', action)

  next(action)

  console.log('ini dari action', store.getState())
}

export default logger