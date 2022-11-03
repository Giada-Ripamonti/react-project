import { ADD_TO_FAV, REMOVE_FAV } from "../actions/actions";

const InitialState = {
  content: [],
};

const FavReducer = (state = InitialState, action) => {
  switch (action.type) {
    case ADD_TO_FAV:
      return {
        ...state,
        content: [...state.content, action.payload],
      };

    case REMOVE_FAV:
      return {
        ...state,
        content: state.content.filter((movie, i) => i !== action.payload),
      };

    default:
      return state;
  }
};

export default FavReducer;
