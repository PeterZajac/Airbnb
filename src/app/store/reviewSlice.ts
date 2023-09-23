import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// slice na properties
export type ReviewItem = {
  //všetko sme vybrali z API a otypovali sme si to
  id: number;
  propertyId: number;
  user: string;
  rating: number;
  text: string;
};

interface ReviewState {
  data?: ReviewItem[];
  loading: boolean;
  error: string | null;
}

const initialState: ReviewState = {
  data: [],
  loading: false,
  error: null,
};

const reviewSlice = createSlice({
  name: "review",
  initialState,
  reducers: {
    reviewRequest: (state) => {
      state.loading = true;
      state.error = null;
    },
    reviewSuccess: (state, action: PayloadAction<ReviewItem[]>) => {
      state.data = action.payload;
      state.loading = false;
      state.error = null;
    },
    reviewFailure: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});
export const { reviewRequest, reviewSuccess, reviewFailure } =
  reviewSlice.actions;
export default reviewSlice.reducer;
