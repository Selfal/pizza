import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setCategory, setSortBy } from '../redux/actions/filters'
import { Categories, PizzaBlock, SortPopup, LoadingBlock } from '../components';
import { fetchPizzas } from '../redux/actions/pizzas';


const categoriesNames = ['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];
const sortItems = [
  { name: 'популярности', type: 'popular', order: 'desc' },
  { name: 'цене', type: 'price', order: 'desc' },
  { name: 'алфавиту', type: 'name', order: 'asc' }
];

function Home() {
  const dispatch = useDispatch();

  const items = useSelector(({ pizzas }) => pizzas.items);
  const isLoaded = useSelector(({ pizzas }) => pizzas.isLoaded);
  const { category, sortBy } = useSelector(({ filters }) => filters);

  React.useEffect(() => {
    dispatch(fetchPizzas(sortBy, category));
  }, [category, dispatch, sortBy]);

  const onSelectCategory = React.useCallback(index => {
    dispatch(setCategory(index));
  }, [dispatch])

  const onSelectSortType = React.useCallback(type => {
    dispatch(setSortBy(type));
  }, [dispatch])

  return (
    <div className="container">
      <div className="content__top">
        <Categories
          activeCategory={category}
          onClickCategory={onSelectCategory}
          items={categoriesNames}
        />

        <SortPopup
          activeSortType={sortBy.type}
          items={sortItems}
          onClickSortType={onSelectSortType}
        />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">

        {isLoaded
          ? items.map((obj) => (<PizzaBlock {...obj} key={obj.id} isLoading={true} />))
          : Array.from({ length: 12 }, (_, i) => (<LoadingBlock key={i} />))
        }
      </div>
    </div>
  )
}

export default Home
