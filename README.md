# Lawyer Appointment Booking System

A single-page application (SPA) built with React, Redux, and Material UI for scheduling appointments with lawyers. The project incorporates user-friendly UI elements, state management, and routing for seamless navigation and booking processes.

## Features

- **Browse and View Lawyers**: See a list of lawyers with their specialties, costs, and availability
- **Dynamic Booking**: Book appointments and decrement available slots dynamically
- **Appointment Management**: View all appointments or filter them by specific lawyers
- **Responsive Design**: Interactive and adaptive UI using Material UI components
- **State Management**: Leverages Redux Toolkit for efficient management of state

## Technologies Used

- **Frontend**: React, React Router, Redux Toolkit
- **UI Library**: Material UI
- **State Management**: Redux
- **Backend**: None (mock data used)
- **Routing**: React Router DOM
- **Avatar Management**: React Avatar

## Dependencies

- `react`
- `react-router-dom`
- `@reduxjs/toolkit`
- `@mui/material`
- `react-avatar`

## Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/RuntimeTerror6969/lawyer-appointment-management-application
cd lawyer-appointment-management-application
```

### 2. Install Dependencies

Ensure you have Node.js and npm installed. Run:

```bash
npm install
```

### 3. Start the Application Locally

```bash
npm run dev
```

The app will be hosted on http://localhost:5173/.

## How to Use

1. **View Lawyers**: Visit the home page to browse a list of lawyers
2. **Book Appointments**: Click the "Book Appointment" button on a lawyer card and fill in the required details
3. **Manage Appointments**: Navigate to the "All Appointments" page to view or filter all booked appointments

## Development Notes

- **Mock Data**: Stored in `/src/data/mockData.js`
- **State Management**: Implemented via Redux slices for appointments and lawyers
- **UI Components**: Built using reusable Material UI components to ensure efficiency and consistency

## Future Enhancements

- **Backend Integration**: Connect to an API for real-time lawyer availability and appointment data
- **Authentication**: Add user authentication for enhanced privacy and functionality
- **Notifications**: Enable email or SMS notifications for appointment confirmations
