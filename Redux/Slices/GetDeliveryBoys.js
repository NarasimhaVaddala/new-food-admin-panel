import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { API } from "../../core/url";

// Define the async thunk to fetch user profile
export const fetchDeliveryBoys = createAsyncThunk(
  "delivery/fetchdelivery",
  async ({ approved, search, isDelivering }, { rejectWithValue }) => {
    try {
      const response = await API.get(`/admin/get-delivery-boys`, {
        params: {
          approved,
          search,
        },
      });
      console.log(response.data, "IN SLICE");

      return response.data;
    } catch (error) {
      return rejectWithValue(error.message || "Something went wrong");
    }
  }
);

export const deliveryBoys = createSlice({
  name: "deliveryBoys",
  initialState: {
    deliveryBoys: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchDeliveryBoys.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchDeliveryBoys.fulfilled, (state, action) => {
        state.loading = false;
        state.deliveryBoys = action.payload;
      })
      .addCase(fetchDeliveryBoys.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || action.error.message;
      });
  },
});

// Export actions and reducer
export const {} = deliveryBoys.actions;

export default deliveryBoys.reducer;
