import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// slice na properties
export type UserItem = {
  //všetko sme vybrali z API a otypovali sme si to
  id: number;
  name: string;
  email: string;
};

interface UserState {
  data?: UserItem[];
  loading: boolean;
  error: string | null;
}

const initialState: UserState = {
  data: [],
  loading: false,
  error: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    userRequest: (state) => {
      state.loading = true;
      state.error = null;
    },
    userSuccess: (state, action: PayloadAction<UserItem[]>) => {
      state.data = action.payload;
      state.loading = false;
      state.error = null;
    },
    userFailure: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});
export const { userRequest, userSuccess, userFailure } = userSlice.actions;
export default userSlice.reducer;
