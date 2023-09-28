import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { EPaths } from "../../types";
// slice na properties
export type DataItem = {
  //všetko sme vybrali z API a otypovali sme si to
  id: number;
  title: string;
  description: string;
  images: string[];
  location: string;
  price: number;
  rooms: number;
  guests: number;
  rating: number;
  amenities: string[];
  host: {
    id: number;
    name: string;
  };
};

export type DataState<T> = {
  data: T[];
  loading: boolean;
  error: string | null;
};

const initialState: DataState<DataItem> = {
  data: [],
  loading: false,
  error: null,
};

const dataSlice = createSlice({
  name: EPaths.PROPERTIES,
  initialState,
  reducers: {
    dataRequest: (state) => {
      state.loading = true;
      state.error = null;
    },
    dataSuccess: (state, action: PayloadAction<DataItem[]>) => {
      //@ts-ignore
      state.data = action.payload;
      state.loading = false;
      state.error = null;
    },
    dataFailure: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});
export const { dataRequest, dataSuccess, dataFailure } = dataSlice.actions;
export default dataSlice.reducer;
