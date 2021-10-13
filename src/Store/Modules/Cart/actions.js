import { CART_ADD, CART_REMOVE } from "./actionsType";

export const addToCart = (product) => ({ type: CART_ADD, product });

export const removeFromCart = (list) => ({ type: CART_REMOVE, list });
