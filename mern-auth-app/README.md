# MERN Stack Authentication System

A full-stack authentication system built with MongoDB, Express.js, React.js, and Node.js.

## Features

- User registration and login
- JWT authentication
- Password hashing
- Form validation
- Responsive design
- Protected routes

## Prerequisites

Before running this project, make sure you have:

- Node.js (v14+ recommended)
- MongoDB installed and running
- npm or yarn package manager

## Project Structure

```
mern-auth-app/
├── client/                 # React frontend
│   ├── src/
│   │   ├── components/    # React components
│   │   ├── styles/       # CSS styles
│   │   └── App.js        # Main React component
│   └── package.json
│
└── server/                # Node.js backend
    ├── src/
    │   ├── controllers/  # Request handlers
    │   ├── models/      # Database models
    │   ├── routes/      # API routes
    │   └── server.js    # Express server setup
    └── package.json
```

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd mern-auth-app
```

2. Install server dependencies:
```bash
cd server
npm install
```

3. Install client dependencies:
```bash
cd ../client
npm install
```

4. Create a .env file in the server directory:
```env
MONGO_URI=mongodb://localhost:27017/auth_db
JWT_SECRET=your_jwt_secret
PORT=5000
CORS_ORIGIN=http://localhost:3000
```

## Running the Application

1. Start the backend server:
```bash
cd server
npm start
```

2. Start the frontend development server:
```bash
cd client
npm start
```

The application will be available at:
- Frontend: http://localhost:3000
- Backend: http://localhost:5000

## API Endpoints

- POST /api/auth/register - Register a new user
- POST /api/auth/login - Login user

## Technologies Used

- **Frontend:**
  - React.js
  - Axios
  - React Router
  - CSS3

- **Backend:**
  - Node.js
  - Express.js
  - MongoDB
  - Mongoose
  - JWT
  - Bcrypt.js

## Security Features

- Password hashing using bcrypt
- JWT for authentication
- Protected routes
- Input validation
- CORS protection

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/YourFeature`)
3. Commit your changes (`git commit -m 'Add some feature'`)
4. Push to the branch (`git push origin feature/YourFeature`)
5. Create a new Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.