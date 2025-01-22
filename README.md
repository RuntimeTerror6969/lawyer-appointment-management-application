# Lawyer Appointment Booking System

A single-page application (SPA) built with React, Redux, and Material UI for scheduling appointments with lawyers. The project incorporates user-friendly UI elements, state management, and routing for seamless navigation and booking processes.

---

## **Features**

- Browse and view a list of lawyers with their specialties, costs, and availability.
- Book appointments with lawyers and decrement their available slots dynamically.
- View all appointments or filter them by specific lawyers.
- Responsive and interactive Material UI components.
- State management with Redux Toolkit for handling lawyers and appointments.

---

## **Technologies Used**

- **Frontend**: React, React Router, Redux Toolkit
- **UI Library**: Material UI
- **State Management**: Redux
- **Backend**: None (mock data used)
- **Routing**: React Router DOM
- **Avatar Management**: React Avatar

---

## **Dependencies**

- `react`
- `react-router-dom`
- `@reduxjs/toolkit`
- `@mui/material`
- `react-avatar`

---

## **File Structure**

root ├── src │ ├── components │ │ ├── layout │ │ │ ├── Layout.jsx │ │ │ ├── Header.jsx │ │ ├── lawyers │ │ │ ├── LawyerList.jsx │ │ │ ├── LawyerCard.jsx │ │ │ ├── AppointmentForm.jsx │ │ │ ├── AllAppointments.jsx │ ├── data │ │ ├── mockData.js │ ├── store │ │ ├── index.js │ │ ├── slices │ │ │ ├── appointmentSlice.js │ │ │ ├── lawyerSlice.js │ ├── App.jsx │ ├── index.js │ └── public ├── index.html

---

## **Setup Instructions**

### **1. Clone the Repository**

```bash
git clone <repository-url>
cd <repository-folder>

2. Install Dependencies

Ensure you have node and npm installed. Run:

npm install

3. Start the Application Locally

npm start

The app will be hosted on http://localhost:3000/.
How to Use

    View Lawyers: Visit the home page to browse a list of lawyers.
    Book Appointments: Click the "Book Appointment" button on a lawyer card to fill in details.
    Manage Appointments: Navigate to "All Appointments" to see or filter all booked appointments.

Development Notes

    Mock Data: Stored in /src/data/mockData.js.
    State Management: Implemented via Redux slices for appointments and lawyers.
    UI Components: Reusable Material UI components for efficiency.
```
