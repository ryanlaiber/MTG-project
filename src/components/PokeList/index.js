import React, { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPokePage } from '../../redux/actions';
import './pokeList.css';


function PokeList() {
  const [page, setPage] = useState(0);
  const dispatch = useDispatch();
  const list = useSelector(({ pokeList }) => pokeList);
  const liRef = useRef();
  const liVisible = null;
  useEffect(
    () => {
      dispatch(fetchPokePage(page))
    }, [page,dispatch]
  );

  return(
    <section>
      <ul id="pokeList">
        {(list.length > 0) && list.map( ({ name }) => <li key={ name }>{ name }</li>) }
      </ul>
      <button onClick={ () => setPage(prev => prev + 1) }>mais 10</button>
    </section>
  );
}

export default PokeList;
