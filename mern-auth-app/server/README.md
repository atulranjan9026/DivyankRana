# MERN Authentication App

This is a MERN stack application that provides user authentication functionality, including login and signup features. The application consists of a client-side built with React and a server-side built with Node.js and Express.

## Features

- User registration (signup) with email and password validation.
- User login with email and password validation.
- Basic form validation for user inputs.
- Middleware for protecting routes and verifying user authentication.

## Technologies Used

- **MongoDB**: Database for storing user information.
- **Express**: Web framework for Node.js to build the server.
- **React**: Frontend library for building user interfaces.
- **Node.js**: JavaScript runtime for the server-side application.

## Getting Started

### Prerequisites

- Node.js
- MongoDB

### Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the server directory:
   ```
   cd server
   ```

3. Install server dependencies:
   ```
   npm install
   ```

4. Navigate to the client directory:
   ```
   cd ../client
   ```

5. Install client dependencies:
   ```
   npm install
   ```

### Running the Application

1. Start the MongoDB server.
2. Start the backend server:
   ```
   cd server
   npm start
   ```

3. Start the frontend application:
   ```
   cd client
   npm start
   ```

The application should now be running on `http://localhost:3000`.

## API Endpoints

- **POST /api/auth/signup**: Register a new user.
- **POST /api/auth/login**: Authenticate a user.

## License

This project is licensed under the MIT License.