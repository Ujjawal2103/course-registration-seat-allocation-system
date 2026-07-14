# Course Registration & Seat Allocation System

A full-stack web application for managing university course registration and seat allocation. The system allows students to register, log in securely, browse available courses, enroll in courses, and view their registered courses through an intuitive dashboard.

---

## Features

### Student Module
- Student Registration
- Secure Login using JWT Authentication
- Browse Available Courses
- Register for Courses
- View Registered Courses Dashboard

### Course Management
- Add New Courses
- View All Courses
- Automatic Seat Count Update
- PostgreSQL Database Integration

### Authentication
- Password Hashing using bcrypt
- JWT-based Authentication
- Protected REST APIs

---

## Tech Stack

### Frontend
- React
- React Router
- Axios
- CSS

### Backend
- Node.js
- Express.js

### Database
- PostgreSQL

### Other Tools
- JWT
- bcrypt
- Postman
- Git & GitHub

---

## Project Structure

```
course-registration-seat-allocation-system
│
├── client
│   ├── components
│   ├── pages
│   ├── services
│   └── App.jsx
│
├── server
│   ├── config
│   ├── controllers
│   ├── routes
│   ├── middleware
│   └── app.js
│
└── README.md
```

---

## API Endpoints

### Authentication

- POST /api/auth/register
- POST /api/auth/login

### Courses

- GET /api/courses
- POST /api/courses

### Registrations

- POST /api/registrations
- GET /api/registrations/:studentId

---

## Database

Main Tables

- students
- courses
- registrations

---

## Future Enhancements

- Waitlist Management
- Automated Seat Allocation
- Timetable Clash Detection
- Prerequisite Validation
- Admin Dashboard
- Analytics Dashboard
- Email Notifications

---

## Author

**Ujjawal Jain**

M.Tech CSE  
International Institute of Information Technology Bangalore
