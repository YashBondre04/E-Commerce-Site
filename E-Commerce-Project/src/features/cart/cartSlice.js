import { createSlice } from "@reduxjs/toolkit";

// 1. Helper function to load cart from LocalStorage safely
const loadCartFromStorage = () => {
  try {
    const serializedState = localStorage.getItem("cart");
    return serializedState ? JSON.parse(serializedState) : [];
  } catch (err) {
    return [];
  }
};

// 2. Initial State
const initialState = {
  items: loadCartFromStorage(), // Load saved items or empty array
  showCart: false,
  // Note: We don't store totalQuantity/Amount here to avoid sync errors.
  // We calculate them on the fly using Selectors (see bottom).
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // ACTION: Add Item (or increase quantity if exists)
    addItemToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      
      // Default to 1 if quantity isn't provided
      const quantityToAdd = newItem.quantity || 1;

      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          title: newItem.title || newItem.name, // Handle varied naming
          price: newItem.price,
          image: newItem.image, // Important for display in Cart Drawer
          quantity: quantityToAdd,
          totalPrice: newItem.price * quantityToAdd,
        });
      } else {
        existingItem.quantity += quantityToAdd;
        existingItem.totalPrice += newItem.price * quantityToAdd;
      }

      // Save to storage
      localStorage.setItem("cart", JSON.stringify(state.items));
    },

    // ACTION: Remove Item Completely (Trash Can Icon)
    removeItemFromCart(state, action) {
      const id = action.payload;
      state.items = state.items.filter((item) => item.id !== id);
      localStorage.setItem("cart", JSON.stringify(state.items));
    },

    // ACTION: Decrease Quantity (Minus Button)
    decrementItem(state, action) {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);

      if (existingItem) {
        if (existingItem.quantity === 1) {
          // If 1, remove it
          state.items = state.items.filter((item) => item.id !== id);
        } else {
          // Else, just decrease
          existingItem.quantity--;
          existingItem.totalPrice -= existingItem.price;
        }
      }
      localStorage.setItem("cart", JSON.stringify(state.items));
    },

    // ACTION: Toggle Cart Drawer Visibility
    toggleCart(state) {
      state.showCart = !state.showCart;
    },
    
    // ACTION: Clear Cart (Checkout)
    clearCart(state) {
        state.items = [];
        localStorage.removeItem("cart");
    }
  },
});

// 3. Export Actions
export const { addItemToCart, removeItemFromCart, decrementItem, toggleCart, clearCart } = cartSlice.actions;

// 4. Export Selectors (Calculate totals dynamically here)
export const selectCartItems = (state) => state.cart.items;
export const selectShowCart = (state) => state.cart.showCart;

export const selectCartTotalAmount = (state) =>
  state.cart.items.reduce((total, item) => total + item.price * item.quantity, 0);

export const selectCartTotalQuantity = (state) =>
  state.cart.items.reduce((total, item) => total + item.quantity, 0);

// 5. Export Reducer
export default cartSlice.reducer;