import { ADD_TO_FAV, ADD_TO_PLAYER, REMOVE_FROM_FAV } from "../actions";

const initialState = {
  content: {
    title: "",
    artist: "",
    id: "",
  },
  favourite: [],
};

const PlayerReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_FAV:
      return {
        ...state,
        favourite: [...state.favourite, action.payload],
      };
    case ADD_TO_PLAYER:
      return {
        ...state,
        content: action.payload,
      };
    case REMOVE_FROM_FAV:
      return {
        ...state,
        favourite: action.payload,
      };
    default:
      return state;
  }
};
export default PlayerReducer;
