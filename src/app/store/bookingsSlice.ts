import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// slice na properties
export type BookingItem = {
  //všetko sme vybrali z API a otypovali sme si to
  id: number;
  propertyId: number;
  userId: number;
  startDate: number;
  endDate: number;
};

interface BookingState {
  data?: BookingItem[];
  loading: boolean;
  error: string | null;
}

const initialState: BookingState = {
  data: [],
  loading: false,
  error: null,
};

const bookingSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    bookingRequest: (state) => {
      state.loading = true;
      state.error = null;
    },
    bookingSuccess: (state, action: PayloadAction<BookingItem[]>) => {
      state.data = action.payload;
      state.loading = false;
      state.error = null;
    },
    bookingFailure: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});
export const { bookingRequest, bookingSuccess, bookingFailure } =
  bookingSlice.actions;
export default bookingSlice.reducer;
