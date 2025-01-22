import React from "react";
import { useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { Card, CardContent, Typography, Stack, Divider } from "@mui/material";

const AllAppointments = () => {
  const [searchParams] = useSearchParams();
  const lawyerId = searchParams.get("lawyerId");
  const appointments = useSelector((state) => state.appointments.appointments);
  const lawyers = useSelector((state) => state.lawyers.lawyers);

  const filteredAppointments = lawyerId
    ? appointments.filter(
        (appointment) => appointment.lawyerId === parseInt(lawyerId)
      )
    : appointments;

  return (
    <div style={{ padding: "20px" }}>
      <Typography variant="h4" gutterBottom>
        {lawyerId
          ? `Appointments for ${
              lawyers.find((lawyer) => lawyer.id === parseInt(lawyerId))
                ?.name || "Unknown Lawyer"
            }`
          : "All Appointments"}
      </Typography>
      <Stack spacing={2}>
        {filteredAppointments.length > 0 ? (
          filteredAppointments.map((appointment) => {
            const lawyer = lawyers.find(
              (lawyer) => lawyer.id === appointment.lawyerId
            );

            return (
              <Card key={appointment.id} sx={{ boxShadow: 3, borderRadius: 2 }}>
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    Lawyer: {lawyer ? lawyer.name : "Unknown"}
                  </Typography>
                  <Divider sx={{ my: 1 }} />
                  <Typography variant="body1">
                    <strong>Client Name:</strong> {appointment.clientName}
                  </Typography>
                  <Typography variant="body1">
                    <strong>Date:</strong> {appointment.date}
                  </Typography>
                  <Typography variant="body1">
                    <strong>Time:</strong> {appointment.time}
                  </Typography>
                  <Typography variant="body1">
                    <strong>Status:</strong> {appointment.status}
                  </Typography>
                </CardContent>
              </Card>
            );
          })
        ) : (
          <Typography variant="body1" color="text.secondary">
            {lawyerId
              ? "No appointments available for this lawyer."
              : "No appointments available."}
          </Typography>
        )}
      </Stack>
    </div>
  );
};

export default AllAppointments;
