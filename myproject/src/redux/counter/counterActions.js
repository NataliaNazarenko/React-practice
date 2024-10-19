export const increment = (state) => state.value += 1;
export const decrement = (state) => state.value -= 1;
export const incrementByAmount = (state, action) => state.value += action.payload;