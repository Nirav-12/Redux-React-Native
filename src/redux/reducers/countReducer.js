const initialState = {
  count: 0,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "INCREAMENT_VALUE":
      return {
        ...state,
        count: state.count + 1,
      };
    case "DECREAMENT_VALUE":
      return {
        ...state,
        count: state.count - 1,
      };

    default:
      return state;
  }
};
