import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { API } from "../../core/url";

// Define the async thunk to fetch user profile
export const fetchOrders = createAsyncThunk(
  "orders/getorders",
  async ({ search, status, paymentMode }, { rejectWithValue }) => {
    try {
      const response = await API.get(`/admin/get-orders`, {
        params: {
          search,
          status,
          paymentMode,
        },
      });
      console.log(response.data, "IN SLICE");

      return response.data;
    } catch (error) {
      return rejectWithValue(error.message || "Something went wrong");
    }
  }
);

export const orderSlice = createSlice({
  name: "orders",
  initialState: {
    orders: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchOrders.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchOrders.fulfilled, (state, action) => {
        state.loading = false;
        state.orders = action.payload;
      })
      .addCase(fetchOrders.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || action.error.message;
      });
  },
});

// Export actions and reducer
export const {} = orderSlice.actions;

export default orderSlice.reducer;
