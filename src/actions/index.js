


export const fetchOptimised = (optim) => {
    return {
      type: "FETCH_OPTIMIZED",
      payload: {
        optim: optim,
      },
    };
  };