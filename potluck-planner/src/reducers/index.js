import { ADD_POTLUCK } from "../actions";
import { data } from "../dummyData";

const initialState = {
  potlucks: data,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POTLUCK:
      return {
        ...state,
        potlucks: [...state.potlucks, action.payload],
      };
    default:
      return state;
  }
};
