import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../app/store";

// Define a type for the slice state
interface BasketState {
  items: any[];
}

// Define the initial state using that type
const initialState: BasketState = {
  items: [],
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addToBasket: (state, action: PayloadAction<number>) => {
      state.items.push(action.payload);
    },

    removeFromBasket: (state, action: PayloadAction<number>) => {
      state.items.filter((item) => item !== action.payload);
    },
  },
});

export const { addToBasket, removeFromBasket } = basketSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectItems = (state: RootState) => state.basket.items;

export default basketSlice.reducer;
