import { createSlice } from "@reduxjs/toolkit";
import { appointments } from "../../data/mockData";

const initialState = {
  appointments: appointments,
  loading: false,
  error: null,
};

const appointmentSlice = createSlice({
  name: "appointments",
  initialState,
  reducers: {
    bookAppointment: (state, action) => {
      state.appointments.push({
        id: state.appointments.length + 1,
        ...action.payload,
        status: "confirmed",
      });
    },
  },
});

export const { bookAppointment } = appointmentSlice.actions;
export default appointmentSlice.reducer;
