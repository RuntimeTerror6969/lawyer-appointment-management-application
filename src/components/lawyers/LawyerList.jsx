import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Container, Box } from "@mui/material";
import LawyerCard from "./LawyerCard";
import AppointmentForm from "./AppointmentForm";

const LawyerList = () => {
  const lawyers = useSelector((state) => state.lawyers.lawyers);
  const [selectedLawyer, setSelectedLawyer] = useState(null);
  const [isFormOpen, setIsFormOpen] = useState(false);

  const handleBooking = (lawyer) => {
    setSelectedLawyer(lawyer);
    setIsFormOpen(true);
  };

  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <Box
        display="grid"
        gridTemplateColumns="repeat(auto-fit, minmax(300px, 1fr))"
        gap={3} // Spacing between items
      >
        {lawyers.map((lawyer) => (
          <Box key={lawyer.id}>
            <LawyerCard lawyer={lawyer} onBook={() => handleBooking(lawyer)} />
          </Box>
        ))}
      </Box>

      {selectedLawyer && (
        <AppointmentForm
          open={isFormOpen}
          onClose={() => setIsFormOpen(false)}
          lawyer={selectedLawyer}
        />
      )}
    </Container>
  );
};

export default LawyerList;
