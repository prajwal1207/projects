// src/features/cart/cartSlice.js
import { createSlice } from "@reduxjs/toolkit";
import { TProductWithQuantity } from "../../types";

export interface CartState {
  items: TProductWithQuantity[];
  totalQuantity: number;
  totalPrice: number;
}

const initialState: CartState = {
  items: [],
  totalQuantity: 0,
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      const item = action.payload;
      const existingItem = state.items.find((i) => i.id === item.id);

      if (existingItem) {
        existingItem.quantity += item.quantity;
      } else {
        state.items.push({
          ...item,
          quantity: item.quantity,
          totalPrice: item.price * item.quantity,
        });
      }

      state.totalQuantity += item.quantity;
      state.totalPrice += item.price * item.quantity;
    },

    removeItem: (state, action) => {
      const product = action.payload;
      const existingItem = state.items.find((i) => i.id === product.id);

      if (existingItem && existingItem.quantity <= 1) {
        state.totalQuantity -= existingItem.quantity;

        state.items = state.items.filter((i) => i.id !== product.id);
      }
    },

    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const existingItem = state.items.find((i) => i.id === id);

      if (existingItem) {
        state.totalQuantity += quantity - existingItem.quantity;
        state.totalPrice +=
          (quantity - existingItem.quantity) * existingItem.price;

        existingItem.quantity = quantity;
      }
    },

    clearCart: (state) => {
      state.items = [];
      state.totalQuantity = 0;
      state.totalPrice = 0;
    },
  },
});

export const { addItem, removeItem, updateQuantity, clearCart } =
  cartSlice.actions;

export default cartSlice.reducer;
