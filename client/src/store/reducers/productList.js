const initialState = {
  locale: 'en'
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case "SET_LOCALE":
      return {
        ...state,
        locale: payload
      }
    default:
      return state;
  }
};

export default reducer;
