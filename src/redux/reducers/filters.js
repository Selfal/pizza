const initialState = { // изначальные состояния
  category: null,
  sortBy: {
    type: 'popular',
    order: 'desc'
  }
}

const filtersReducer = (state = initialState, action) => { // Редьюсер
  if (action.type === "SET_SORT_BY") {
    return {
      ...state,
      sortBy: action.payload
    }
  } else if (action.type === "SET_CATEGORY") {
    return {
      ...state,
      category: action.payload
    }
  }
  return state;
}

export default filtersReducer;