const selectedReducer = (state = {fetching: false, fetched: false, airport: {}}, action) => {
    switch (action.type) {
      case "FETCH_PORT":
        return {
            ...state,
            fetching: true,
            airport: {},
            fetched: false
        };
      case "RECEIVE_PORT":
        return {
            ...state,
        fetched: true,
        airport: action.payload,
        fetching: false
        };
      default:
        return state;
    }
  };
  
  export default selectedReducer;
  