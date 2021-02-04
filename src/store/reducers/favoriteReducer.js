const initialState = {
  favoriteIds: []
}

const favoriteReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_FAVORITE':
      return {
        ...state,
        favoriteIds: state.favoriteIds.concat(action.payload)
      }
    default: 
      return state
  }
}

export default favoriteReducer