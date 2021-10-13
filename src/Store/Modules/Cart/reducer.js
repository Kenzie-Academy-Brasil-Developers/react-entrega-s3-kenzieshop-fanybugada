import { CART_ADD, CART_REMOVE } from "./actionsType";

const initialState = JSON.parse(localStorage.getItem("cart")) || [];

function cartReducer(state = initialState, action) {
  switch (action.type) {
    case CART_ADD:
      const { product } = action;

      return [...state, product];

    case CART_REMOVE:
      const { list } = action;

      return list;

    default:
      return state;
  }
}

export default cartReducer;
