const fetchcities = (state = {fetching: false, fetched: false, city: []}, action) => {
    switch (action.type) {
      case "FETCH_LEADS":
        return {
            ...state,
            fetching: true,
            city: [],
            fetched: false
        };
      case "RECEIVE_LEADS":
        return {
            ...state,
        fetched: true,
        city: action.payload,
        fetching: false
        };
      default:
        return state;
    }
  };
  
  export default fetchcities;
  