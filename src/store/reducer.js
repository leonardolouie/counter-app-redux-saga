import { AGE_UP_ASYNC } from "../constants";
import { AGE_DOWN } from "../constants";
const initialState = {
  age: 20,
};

const reducer = (state = initialState, action) => {
  const newState = { ...state };

  console.log(newState);

  switch (action.type) {
    case AGE_UP_ASYNC:
      newState.age += action.state;
      break;

    case AGE_DOWN:
      newState.age -= action.state;
      break;
      
    default:
      console.log("nothing dispatch");
  }
  return newState;
};

export default reducer;
