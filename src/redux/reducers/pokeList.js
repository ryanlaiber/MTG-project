import { ADD_LISTPAGE } from '../actions';

const pokelistInitialState = [];

const pokeList = (state = pokelistInitialState, action) => {
  switch(action.type) {
    case ADD_LISTPAGE:
      {
        return ([...state, ...action.payload]);
      }
    default:
      {
        return state;
      }

  }
}

export default pokeList;
