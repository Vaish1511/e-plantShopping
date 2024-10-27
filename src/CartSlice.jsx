import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
  },
  reducers: {
    addItem: (state, action) => {
      const item = action.payload;
      const existingItem = state.items.find((i) => i.name === item.name); // Make sure to compare with the right property
      if (existingItem) {
        existingItem.quantity++;
      } else {
        state.items.push({ ...item, quantity: 1 });
      }
    },
    removeItem: (state, action) => {
      const item = action.payload;
      const existingItem = state.items.find((i) => i.name === item.name);
      if (existingItem) {
        state.items = state.items.filter((i) => i.name !== item.name);
      }
    },
    updateQuantity: (state, action) => {
      const { name, quantity } = action.payload;
      const item = state.items.find((i) => i.name === name);
      if (item) {
        item.quantity = quantity; // Update quantity
        if (item.quantity === 0) {
          state.items = state.items.filter((i) => i.name !== name);
        }
      }
    },
  },
});

// Export the actions
export const { addItem, removeItem, updateQuantity } = cartSlice.actions;

// Export the reducer as default
export default cartSlice.reducer;
