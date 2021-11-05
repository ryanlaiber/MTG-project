import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPokePage } from '../../redux/actions';
import './pokeList.css';


function PokeList() {
  const [page, setPage] = useState(0);
  const dispatch = useDispatch();
  const list = useSelector(({ pokeList }) => pokeList);

  const observer = useRef();
  const lastPokemon = useCallback(node => {
    if (observer.current) {
      observer.current.disconnect();
    }
    observer.current = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        setPage(prev => prev + 1);
      }
    });
    if (node) observer.current.observe(node);
  }, [setPage]);

  useEffect(
    () => {
      dispatch(fetchPokePage(page))
    }, [page,dispatch]
  );

  return(
    <section>
      <ul id="pokeList">
        {(list.length > 0) && list.map( ({ name }, i) => {
          if (i === (list.length -1)) {
            return <li key={ i } ref={ lastPokemon }>{ name }</li>
          }
          return <li key={ i }>{ name }</li>
      }) }
      </ul>
      <button onClick={ () => setPage(prev => prev + 1) }>mais 10</button>
    </section>
  );
}

export default PokeList;
