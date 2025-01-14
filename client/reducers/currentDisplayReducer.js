import * as types from "../actions/actionTypes.js";

const initialState = {
  currDisplay: {
    filter: "",
    category: "",
  },
};

const currentDisplayReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.UPDATE_CURRDISPLAY: {
      const currentDisplay = action.payload;

      return {
        ...state,
        currDisplay: currentDisplay,
      };
    }
    default: {
      return state;
    }
  }
};

export default currentDisplayReducer;
