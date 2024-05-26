import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  symptomActiveStep: 0,
  firstName: "",
  lastName: "",
  age: "",
  gender: "male",
  symptoms: [],
};

export const symptomCheckerSlice = createSlice({
  name: "symptomChecker",
  initialState,
  reducers: {
    setSymptomStep: (state, action) => {
      state.symptomActiveStep = action.payload;
    },
    setFirstName: (state, action) => {
      state.firstName = action.payload;
    },
    setLastName: (state, action) => {
      state.lastName = action.payload;
    },
    setAge: (state, action) => {
      state.age = action.payload;
    },
    setGender: (state, action) => {
      state.gender = action.payload;
    },
    setSymptoms: (state, action) => {
      state.symptoms = action.payload;
    },
    resetSymptomState: (state) => {
      return (state = initialState);
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  setSymptomStep,
  setFirstName,
  setLastName,
  setAge,
  setGender,
  setSymptoms,
  resetSymptomState,
} = symptomCheckerSlice.actions;

export default symptomCheckerSlice.reducer;
