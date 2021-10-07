const URL_POKELIST = 'https://pokeapi.co/api/v2/pokemon/';

export const ADD_LISTPAGE = 'ADD_LISTPAGE';

const addListPage = payload => ({
  type: ADD_LISTPAGE,
  payload,
});

export const fetchPokePage = page => {
  return (dispatch) => (
    fetch(`${URL_POKELIST}?limit=${10}&offset=${10 * page}`)
      .then((r) => r.json())
      .then((r) => dispatch(addListPage(r.results)))
  )

}
