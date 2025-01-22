import { configureStore } from "@reduxjs/toolkit";
import lawyerReducer from "./slices/lawyerSlice";
import appointmentReducer from "./slices/appointmentSlice";

export const store = configureStore({
  reducer: {
    lawyers: lawyerReducer,
    appointments: appointmentReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
