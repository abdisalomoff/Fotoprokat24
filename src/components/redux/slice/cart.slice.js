import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
    quantity: 0,

  },
  reducers: {
    addToCart(state, action) {
      const find = state.cart.find((item)=> item.product_id === action.payload.product_id);
      if(find){
        find.quantity += 1
      }else{
        state.cart.push({...action.payload, quantity: 1});
      }
    },

    removeToCart(state, action) {
        const productIdToRemove = action.payload.product_id;
        const find = state.cart.find((item) => item.product_id === productIdToRemove);
        if (find && find.quantity > 1) {
          find.quantity -= 1;
        } else {
          state.cart = state.cart.filter((item) => item.product_id !== productIdToRemove);
        }
      },

    deleteItem(state, action) {
        const productIdToDelete = action.payload;
        state.cart = state.cart.filter((item) => item.product_id !== productIdToDelete);
    },

    clearCart(state, action){
      state.cart = []
    },
  },
});

export default cartSlice.reducer;
export const { addToCart,removeToCart, clearCart, deleteItem  } = cartSlice.actions;


