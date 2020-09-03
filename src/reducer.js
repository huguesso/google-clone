export const initialState = {
  term: null,
  isBoxVisible: false,
};

export const actionTypes = {
  SET_SEARCH_TERM: "SET_SEARCH_TERM",
  TOGGLE_BoxVisible: "TOGGLE_BoxVisible",
};

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case actionTypes.SET_SEARCH_TERM:
      return {
        ...state,
        term: action.term,
      };
    case actionTypes.TOGGLE_BoxVisible:
      return {
        ...state,
        isBoxVisible: action.isBoxVisible,
      };
    default:
      return state;
  }
};

export default reducer;
