import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../app/store";
import { ProductType } from "../pages";
import { createSelector } from "reselect";
import { ProductExtendedType } from "../components/product";

// Define a type for the slice state
interface BasketState {
  items: ProductExtendedType[];
}

// Define the initial state using that type
const initialState: BasketState = {
  items: [],
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addToBasket: (state, action: PayloadAction<ProductExtendedType>) => {
      state.items.push(action.payload);
    },

    removeFromBasket: (state, action: PayloadAction<ProductExtendedType>) => {
      const index = state.items.findIndex(
        (item) => item.id === action.payload.id
      );
      state.items.splice(index, 1);
    },
  },
});

export const { addToBasket, removeFromBasket } = basketSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectItems = (state: RootState) => state.basket.items;

export const selectNumberOfItems = createSelector(
  selectItems,
  (items) => items.length
);

export const selectTotal = createSelector(selectItems, (items) =>
  items.reduce((total, item) => total + item.price, 0)
);

export default basketSlice.reducer;
