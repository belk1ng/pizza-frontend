import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import type { RootState } from "@store/store";

type CartProduct = Record<number, number>;

interface CartSliceValues {
  products: CartProduct;
  productsCount: number;
}

const initialState: CartSliceValues = {
  products: {},
  productsCount: 0,
};

type CartPayloadProductId = number;

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<CartPayloadProductId>) => {
      const productId = action.payload;
      const productAlreadyInCart = state.products[productId];

      if (productAlreadyInCart) {
        state.products[productId] = productAlreadyInCart + 1;
      } else {
        state.products[productId] = 1;
      }

      state.productsCount++;
    },
    removeProduct: (state, action: PayloadAction<CartPayloadProductId>) => {
      const productId = action.payload;
      const productsCount = state.products[productId];

      state.productsCount -= productsCount;
      delete state.products[productId];
    },
    incrementProductCount: (
      state,
      action: PayloadAction<CartPayloadProductId>
    ) => {
      const productId = action.payload;
      const productCurrentCount = state.products[productId];

      if (productCurrentCount) {
        state.products[productId] = productCurrentCount + 1;
        state.productsCount++;
      }
    },
    decrementProductCount: (
      state,
      action: PayloadAction<CartPayloadProductId>
    ) => {
      const productId = action.payload;
      const productCurrentCount = state.products[productId];

      if (productCurrentCount === 1) {
        delete state.products[productId];
        state.productsCount--;
      } else if (productCurrentCount) {
        state.products[productId] = productCurrentCount - 1;
        state.productsCount--;
      }
    },
  },
});

export default cartSlice.reducer;

export const cartSelector = (state: RootState) => state.cart;

export const cartActions = cartSlice.actions;
