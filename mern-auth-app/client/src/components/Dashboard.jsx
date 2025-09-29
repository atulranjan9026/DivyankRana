import React from 'react';
import { jwtDecode } from 'jwt-decode'; // npm install jwt-decode if not installed
import './Dashboard.css'; // CSS for styling

const Dashboard = () => {
  const token = localStorage.getItem('token');

  if (!token) {
    return <div>Please login to access the dashboard.</div>;
  }

  // Decode token to get user data (assuming it contains name/email)
  const user = jwtDecode(token);

  const handleLogout = () => {
    localStorage.removeItem('token');
    window.location.href = '/';
  };

  return (
    <div className="dashboard-container">
      <h1>Welcome to Your Dashboard</h1>

      <div className="cards-container">
        {/* User Profile Card */}
        <div className="card profile-card">
          <h2>User Profile</h2>
          <p><strong>Name:</strong> {user.name || "N/A"}</p> 
          <p><strong>Email:</strong> {user.email || "N/A"}</p>
        </div>

        {/* Sample Stats Card */}
        <div className="card stats-card">
          <h2>Account Stats</h2>
          <p><strong>Posts:</strong> 12</p>
          <p><strong>Followers:</strong> 305</p>
          <p><strong>Following:</strong> 180</p>
        </div>

        {/* Notifications Card */}
        <div className="card notifications-card">
          <h2>Notifications</h2>
          <ul>
            <li>You have 3 new messages</li>
            <li>Your profile was visited 40 times today</li>
            <li>Update your profile for better visibility</li>
          </ul>
        </div>
      </div>

      <button className="logout-btn" onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Dashboard;
