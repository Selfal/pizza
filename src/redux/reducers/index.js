import {
  combineReducers
} from 'redux';

import filtersReducer from './filters';
import pizzasReducer from './pizzas';

const rootReducer = combineReducers({ // Объединение редьюсеров в 1
  filters: filtersReducer,
  pizzas: pizzasReducer,
})

export default rootReducer;