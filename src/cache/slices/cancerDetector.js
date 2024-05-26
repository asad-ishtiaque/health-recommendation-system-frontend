import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cancerActiveStep: 0,
  type: "skin",
};

export const cancerDetectorSlice = createSlice({
  name: "cancerDetector",
  initialState,
  reducers: {
    setCancerStep: (state, action) => {
      state.cancerActiveStep = action.payload;
    },
    setType: (state, action) => {
      state.type = action.payload;
    },
    resetCancerState: (state) => {
      return (state = initialState);
    },
  },
});

// Action creators are generated for each case reducer function
export const { setCancerStep, setType, resetCancerState } =
  cancerDetectorSlice.actions;

export default cancerDetectorSlice.reducer;
