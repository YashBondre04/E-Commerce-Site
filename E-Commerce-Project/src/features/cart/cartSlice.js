const { createScrollAreaScope } = require("@radix-ui/react-scroll-area");
const { createSlice } = require("@reduxjs/toolkit");


const cartSlice = createSlice({
    name: "cart",
});

/*const { createSlice } = require("@reduxjs/toolkit");

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalAmount: 0,
  },
  reducers: {
    addItemToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      state.totalAmount += newItem.price * newItem.quantity;
      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          price: newItem.price,
          quantity: newItem.quantity,
          totalPrice: newItem.price * newItem.quantity,
          name: newItem.name,
        });
      } else {
        existingItem.quantity += newItem.quantity;
        existingItem.totalPrice += newItem.price * newItem.quantity;
      }
    },
    removeItemFromCart(state, action) {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      if (existingItem) {
        state.totalAmount -= existingItem.price;
        if (existingItem.quantity === 1) {
          state.items = state.items.filter((item) => item.id !== id);
        } else {
          existingItem.quantity -= 1;
          existingItem.totalPrice -= existingItem.price;
        }
      }
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;import cartReducer from '../features/cart/cartSlice'; */
