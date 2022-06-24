const GENERATE_RANDOME_GREETING = "GENERATE_RANDOME_GREETING"
const initialState = {
  greeting:""
};

function rootReducer(state=initialState,action){
  switch (action.type){
    case GENERATE_RANDOME_GREETING:
      return {greeting:action.json.greeting}
    default:
      return state
  }
}

export default rootReducer;
