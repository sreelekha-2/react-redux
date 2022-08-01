const initialState = { count: 0 };

export function counterReducer(state = initialState, actions) {
  switch (actions.type) {
    case 'increment':
      return {
        ...state,
        count: state.count + 1,
      };

    case 'decrement':
      return {
        ...state,
        count: state.count - 1,
      };
    default:
      return state;
  }
}
