
const initialState = {
  result : 1,
  last : []
}

const reducer = (state = initialState, action) => {     //state and action are passed automatically from the redux
    switch (action.type) {
      case "ADD":
        state = {
          ...state,
          result: state.result  + action.payload,
          last : [...state.last, action.payload]
        }
        break;
      case "SUB":
        break;
    }
    return state;
};
export default reducer;
