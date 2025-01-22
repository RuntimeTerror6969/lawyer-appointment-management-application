import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store";
import Layout from "./components/layout/Layout";
import LawyerList from "./components/lawyers/LawyerList";
import AllAppointments from "./components/lawyers/AllAppointments";
import Header from "./components/layout/Header";
import { Box } from "@mui/material";

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Header />
      <Box sx={{ mt: 8, p: 3 }}>
        <Layout>
          <Routes>
            <Route path="/" element={<LawyerList />} />
            <Route path="/appointments" element={<AllAppointments />} />
          </Routes>
        </Layout>
      </Box>
    </BrowserRouter>
  </Provider>
);

export default App;
