import { createSlice } from "@reduxjs/toolkit";
import { lawyers } from "../../data/mockData";

const initialState = {
  lawyers: lawyers,
  selectedLawyer: null,
  loading: false,
  error: null,
};

const lawyerSlice = createSlice({
  name: "lawyers",
  initialState,
  reducers: {
    setSelectedLawyer: (state, action) => {
      state.selectedLawyer = action.payload;
    },
    decrementAvailableSlots: (state, action) => {
      const lawyer = state.lawyers.find(
        (lawyer) => lawyer.id === action.payload
      );
      if (lawyer && lawyer.availableSlots > 0) {
        lawyer.availableSlots -= 1;
      }
    },
    resetLawyers: (state) => {
      state.lawyers = lawyers;
    },
  },
});

export const { setSelectedLawyer, decrementAvailableSlots, resetLawyers } =
  lawyerSlice.actions;
export default lawyerSlice.reducer;
