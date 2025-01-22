import React, { useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  Button,
  Stack,
  Chip,
  Divider,
  Box,
} from "@mui/material";
import { useDispatch } from "react-redux";
import { bookAppointment } from "../../store/slices/appointmentSlice";
import { decrementAvailableSlots } from "../../store/slices/lawyerSlice";
import { useNavigate } from "react-router-dom";
import AppointmentForm from "./AppointmentForm";
import Avatar from "react-avatar";

const LawyerCard = ({ lawyer }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [openForm, setOpenForm] = useState(false);

  const handleOpenForm = () => {
    if (lawyer.availableSlots === 0) {
      window.alert("No slots available for this lawyer.");
    } else {
      setOpenForm(true);
    }
  };

  const handleCloseForm = () => setOpenForm(false);

  const handleBookAppointment = (formData) => {
    dispatch(
      bookAppointment({
        ...formData,
        lawyerId: lawyer.id,
        status: "confirmed",
      })
    );
    dispatch(decrementAvailableSlots(lawyer.id));
  };

  return (
    <Card
      sx={{
        maxWidth: 400,
        mb: 3,
        boxShadow: 6,
        borderRadius: 3,
        overflow: "visible",
      }}
    >
      <CardContent>
        <Box sx={{ position: "relative", textAlign: "center", mt: 2 }}>
          <Avatar
            name={lawyer.name}
            size="60"
            round={true}
            style={{
              boxShadow: "3px 3px 10px rgba(0, 0, 0, 0.1)",
              position: "absolute",
              top: -30,
              left: "50%",
              transform: "translateX(-50%)",
              backgroundColor: "#fff",
            }}
          />
        </Box>
        <Typography
          variant="h5"
          component="div"
          gutterBottom
          align="center"
          sx={{ mt: 6 }}
        >
          {lawyer.name}
        </Typography>

        <Divider sx={{ my: 2 }} />

        <Typography variant="subtitle1" color="text.secondary" gutterBottom>
          Specialties
        </Typography>
        <Stack direction="row" flexWrap="wrap" spacing={1} mb={2}>
          {lawyer.specialties.map((specialty, index) => (
            <Chip
              key={index}
              label={specialty}
              size="small"
              sx={{
                backgroundColor: "#757575",
                color: "white",
                fontWeight: "bold",
              }}
            />
          ))}
        </Stack>

        <Typography color="text.secondary" variant="body1" mb={1}>
          Cost per Appointment: <strong>${lawyer.costPerAppointment}</strong>
        </Typography>
        <Typography color="text.secondary" variant="body2" mb={2}>
          Available Slots: <strong>{lawyer.availableSlots}</strong>
        </Typography>

        <Divider sx={{ my: 2 }} />

        <Stack spacing={2}>
          <Button
            variant="contained"
            fullWidth
            onClick={handleOpenForm}
            sx={{
              boxShadow: 3,
              borderRadius: "8px",
              backgroundColor:
                lawyer.availableSlots === 0 ? "#bdbdbd" : "#0099ff",
              "&:hover": {
                backgroundColor:
                  lawyer.availableSlots === 0 ? "#bdbdbd" : "#424242",
              },
            }}
          >
            Book Appointment
          </Button>
          <Button
            variant="outlined"
            color="secondary"
            fullWidth
            onClick={() => navigate(`/appointments?lawyerId=${lawyer.id}`)}
            sx={{ boxShadow: 1, borderRadius: "8px" }}
          >
            View History
          </Button>
        </Stack>
      </CardContent>

      <AppointmentForm
        open={openForm}
        onClose={handleCloseForm}
        lawyer={lawyer}
        onSubmit={handleBookAppointment}
      />
    </Card>
  );
};

export default LawyerCard;
