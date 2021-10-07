import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPokePage } from '../../redux/actions';


function PokeList() {
  const [page, setPage] = useState(0);
  const dispatch = useDispatch();
  const list = useSelector(({ pokeList }) => pokeList);

  useEffect(
    () => {
      dispatch(fetchPokePage(page))
    }, [page,dispatch]
  );

  return(
    <div>
      {(list.length > 0) && list.map( ({ name }) => <p key={ name }>{ name }</p>) }
      <button onClick={ () => setPage(prev => prev + 1) }>mais 10</button>
    </div>
  );
}

export default PokeList;
