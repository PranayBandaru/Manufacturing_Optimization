export default (state = [], action) => {
    switch (action.type) {
      case "FETCH_OPTIMIZED":
        return [action.payload.optim];
  
      default:
        return state;
    }
  };
  