import { createSlice } from "@reduxjs/toolkit";

// 1. Load cart from LocalStorage safely (Persistence)
const loadCartFromStorage = () => {
  try {
    const serializedState = localStorage.getItem("cart");
    return serializedState ? JSON.parse(serializedState) : [];
  } catch (err) {
    return [];
  }
};

const initialState = {
  items: loadCartFromStorage(), // The list of products
  showCart: false,              // Is the side drawer open?
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // ACTION: Add Item (or increase quantity if exists)
    addItemToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      
      const quantityToAdd = newItem.quantity || 1;

      if (!existingItem) {
        // If new, push it to the array
        state.items.push({
          id: newItem.id,
          title: newItem.title || newItem.name,
          price: newItem.price,
          image: newItem.image,
          quantity: quantityToAdd,
        });
      } else {
        // If exists, just update numbers
        existingItem.quantity += quantityToAdd;
      }

      // Save to storage immediately
      localStorage.setItem("cart", JSON.stringify(state.items));
    },

    // ACTION: Remove Item Completely
    removeItemFromCart(state, action) {
      const id = action.payload;
      state.items = state.items.filter((item) => item.id !== id);
      localStorage.setItem("cart", JSON.stringify(state.items));
    },

    // ACTION: Decrease Quantity ("-" Button)
    decrementItem(state, action) {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);

      if (existingItem) {
        if (existingItem.quantity === 1) {
          state.items = state.items.filter((item) => item.id !== id);
        } else {
          existingItem.quantity--;
        }
      }
      localStorage.setItem("cart", JSON.stringify(state.items));
    },
  },
});

// Export Actions (Buttons trigger these)
export const { addItemToCart, removeItemFromCart, decrementItem } = cartSlice.actions;

// Export Selectors (Components read these to get data)
export const selectCartItems = (state) => state.cart.items;

export const selectCartTotalAmount = (state) =>
  state.cart.items.reduce((total, item) => total + item.price * item.quantity, 0);

export const selectCartTotalQuantity = (state) =>
  state.cart.items.reduce((total, item) => total + item.quantity, 0);

export default cartSlice.reducer;