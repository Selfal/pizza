const initialState = { // изначальные состояния
  items: [],
  isLoaded: false
}

const filtersReducer = (state = initialState, action) => { // Редьюсер
  switch (action.type) {
    case 'SET_PIZZAS':
      return {
        ...state,
        items: action.payload,
          isLoaded: true
      };
    case 'SET_LOADED':
      return {
        ...state,
        isLoaded: action.payload
      };
    default:
      return state;
  }
}

export default filtersReducer;