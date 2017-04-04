// Ideally this file will import all the different reducers one migth use in the app.
const reducers = (state = 0, action) => {
  // Sample
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 2;
    default:
      return state;
  }
};

export default reducers;
