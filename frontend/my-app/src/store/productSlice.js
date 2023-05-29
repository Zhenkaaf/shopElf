import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProducts = createAsyncThunk(
  //?shopId=${shopId}
  "products/fetchProducts",
  async (shopId, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `https://zany-jade-chipmunk-cape.cyclic.app/posts`
      );
      console.log(response);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const productSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        console.log("Received products:", action.payload);
        state.products = action.payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const {} = productSlice.actions;

export default productSlice.reducer;