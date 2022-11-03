import { SET_USERNAME, SET_EMAIL } from "../actions/actions";

const InitialState = {
  name: "",
  email: "",
};

const UserReducer = (state = InitialState, action) => {
  switch (action.type) {
    case SET_USERNAME:
      return {
        ...state,
        name: action.payload,
      };

    case SET_EMAIL:
      return {  
        ...state,
        email: action.payload,
      };

    default:
      return state;
  }
};

export default UserReducer;
