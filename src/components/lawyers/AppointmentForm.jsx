import React, { useState } from "react";
import {
  Alert,
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  Button,
  Stack,
  DialogActions,
} from "@mui/material";

const AppointmentForm = ({ open, onClose, lawyer, onSubmit }) => {
  const [feedback, setFeedback] = useState("");
  const [formData, setFormData] = useState({
    clientName: "",
    date: "",
    time: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.clientName || !formData.date || !formData.time) {
      setFeedback("Please fill all fields");
      return;
    }
    onSubmit(formData);
    setFeedback("Appointment booked successfully!");
    setTimeout(() => {
      onClose();
      setFeedback("");
      setFormData({
        clientName: "",
        date: "",
        time: "",
      });
    }, 2000);
  };

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
      <DialogTitle>Book Appointment with {lawyer.name}</DialogTitle>
      <DialogContent>
        {feedback && (
          <Alert
            severity={feedback.includes("success") ? "success" : "error"}
            sx={{ mb: 2 }}
          >
            {feedback}
          </Alert>
        )}
        <Stack spacing={3} sx={{ mt: 2 }}>
          <TextField
            label="Your Name"
            fullWidth
            value={formData.clientName}
            onChange={(e) =>
              setFormData({ ...formData, clientName: e.target.value })
            }
          />
          <TextField
            type="date"
            label="Date"
            fullWidth
            InputLabelProps={{ shrink: true }}
            value={formData.date}
            onChange={(e) => setFormData({ ...formData, date: e.target.value })}
          />
          <TextField
            type="time"
            label="Time"
            fullWidth
            InputLabelProps={{ shrink: true }}
            value={formData.time}
            onChange={(e) => setFormData({ ...formData, time: e.target.value })}
          />
        </Stack>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button onClick={handleSubmit} variant="contained">
          Book
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AppointmentForm;
