export const addFavorite = (id) => {
  return {
    type: 'ADD_FAVORITE',
    payload: id
  }
}