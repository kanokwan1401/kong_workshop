// กำหนด action ใน appication

const reducer = (state, action) => {
  console.log(state);
  if (action.type === "REMOVE_ITEM") {
    return {
      ...state,
      cart: state.cart.filter((item) => item.id !== action.payload),
    };
  }
};
export default reducer;