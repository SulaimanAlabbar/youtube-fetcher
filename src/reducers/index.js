import {
  API_KEY,
  ADD_YOUTUBER,
  SORT_BY,
  PRUNE,
  CHANGE_PAGE
} from "../constants";

function reducer(state, action) {
  switch (action.type) {
    case ADD_YOUTUBER:
      //do stuff here axios and...etc
      return state;

    default:
      return state;
  }
}

export default reducer;
